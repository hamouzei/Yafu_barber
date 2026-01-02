# Blog CMS Integration Guide

## Overview

This document outlines how to integrate a headless CMS for the BuzzCut blog section. The current implementation uses static data from `constants.tsx`, but can be easily upgraded to a dynamic CMS.

## Recommended CMS Options

### 1. **Contentful** (Recommended for Production)

- **Pros**: Enterprise-grade, excellent API, CDN delivery, media optimization
- **Pricing**: Free tier available (25k records, 3 users)
- **Setup Time**: ~2 hours

### 2. **Strapi** (Best for Self-Hosting)

- **Pros**: Open-source, full control, customizable
- **Pricing**: Free (self-hosted)
- **Setup Time**: ~4 hours

### 3. **Sanity.io**

- **Pros**: Real-time collaboration, excellent developer experience
- **Pricing**: Free tier generous (100k documents)
- **Setup Time**: ~3 hours

---

## Implementation Guide (Contentful Example)

### Step 1: Setup Contentful

```bash
# Install Contentful SDK
npm install contentful
```

### Step 2: Create Content Model

In Contentful dashboard, create a "Blog Post" content type with these fields:

- `title` (Short text, required)
- `slug` (Short text, required, unique)
- `excerpt` (Long text)
- `content` (Rich text)
- `featuredImage` (Media)
- `category` (Short text)
- `author` (Reference to Author content type)
- `publishDate` (Date & time)
- `tags` (Short text, list)
- `seoTitle` (Short text)
- `seoDescription` (Long text)

### Step 3: Create API Service

Create `services/contentful.ts`:

```typescript
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  tags: string[];
  comments: number; // You'd fetch this from your backend
}

export async function getBlogPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      limit,
      order: "-fields.publishDate",
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
        width: item.fields.featuredImage.fields.file.details.image.width,
        height: item.fields.featuredImage.fields.file.details.image.height,
      },
      category: item.fields.category,
      author: {
        name: item.fields.author.fields.name,
        avatar: item.fields.author.fields.avatar.fields.file.url,
        bio: item.fields.author.fields.bio,
      },
      publishDate: item.fields.publishDate,
      tags: item.fields.tags || [],
      comments: 0, // Implement comment counting separately
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length === 0) return null;

    const item = response.items[0];
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
        width: item.fields.featuredImage.fields.file.details.image.width,
        height: item.fields.featuredImage.fields.file.details.image.height,
      },
      category: item.fields.category,
      author: {
        name: item.fields.author.fields.name,
        avatar: item.fields.author.fields.avatar.fields.file.url,
        bio: item.fields.author.fields.bio,
      },
      publishDate: item.fields.publishDate,
      tags: item.fields.tags || [],
      comments: 0,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
```

### Step 4: Update App.tsx

Replace the static blog posts with CMS data:

```typescript
import { useEffect, useState } from "react";
import { getBlogPosts, BlogPost } from "./services/contentful";

function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBlogPosts(3);
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  return (
    <section className="py-24 bg-brand-gray/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-heading uppercase">
            Our Latest News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden mb-6 aspect-video">
                <OptimizedImage
                  src={post.featuredImage.url}
                  alt={post.featuredImage.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={post.featuredImage.width}
                  height={post.featuredImage.height}
                />
              </div>
              <div className="flex gap-4 text-xs uppercase tracking-widest text-brand-lightGray mb-4">
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString()}
                </time>
                <span className="text-brand-accent" aria-hidden="true">
                  /
                </span>
                <span>{post.comments} Comments</span>
              </div>
              <h3 className="text-xl font-heading uppercase leading-tight mb-4 group-hover:text-brand-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-brand-lightGray mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-xs uppercase font-bold tracking-[0.2em] border-b border-brand-accent pb-1 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label={`Read more about ${post.title}`}
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Step 5: Environment Variables

Add to `.env.local`:

```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

---

## Alternative: Static Site Generation (Recommended)

For better performance, use Static Site Generation (SSG):

### Using Astro (Recommended)

```bash
npm install astro
```

Create `src/pages/blog/[slug].astro`:

```astro
---
import { getBlogPosts, getBlogPost } from '../../services/contentful';

export async function getStaticPaths() {
  const posts = await getBlogPosts(100);
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
---

<article>
  <h1>{post.title}</h1>
  <img src={post.featuredImage.url} alt={post.featuredImage.title} />
  <div set:html={post.content} />
</article>
```

---

## Comments Integration

### Option 1: Disqus

```html
<div id="disqus_thread"></div>
<script>
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = "blog-post-${slug}";
  };
</script>
```

### Option 2: Custom Backend

Create a simple Express API for comments or use Firebase/Supabase.

---

## SEO Optimization

Update `index.html` dynamically:

```typescript
export function updateMeta(post: BlogPost) {
  document.title = post.seoTitle || post.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      post.seoDescription || post.excerpt
    );
  }

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", post.title);
  }
}
```

---

## Migration Path

1. **Phase 1**: Keep static data, add CMS SDK
2. **Phase 2**: Create content in CMS, test API
3. **Phase 3**: Switch to CMS data with fallback to static
4. **Phase 4**: Remove static data, full CMS integration

---

## Cost Estimate

- **Contentful**: Free for <25k records
- **Cloudinary** (image optimization): Free for <25GB bandwidth
- **Hosting** (Vercel): Free for hobby projects
- **Total Monthly Cost**: $0 - $50 depending on traffic

---

## Maintenance

- Update content via CMS dashboard (no code changes needed)
- Automatic image optimization
- Built-in versioning and scheduling
- Multi-user collaboration

---

For questions or implementation help, refer to the official CMS documentation or contact the development team.
