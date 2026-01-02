import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import OptimizedImage from "../OptimizedImage";

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(public callback: IntersectionObserverCallback) {}
  observe() {
    // Simulate immediate intersection for testing
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  get root() {
    return null;
  }
  get rootMargin() {
    return "";
  }
  get thresholds() {
    return [];
  }
} as any;

describe("OptimizedImage", () => {
  it("should render image with correct attributes", () => {
    render(
      <OptimizedImage
        src="https://example.com/image.jpg"
        alt="Test image"
        width={800}
        height={600}
      />
    );

    const img = screen.getByAltText("Test image");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(img).toHaveAttribute("width", "800");
    expect(img).toHaveAttribute("height", "600");
  });

  it("should apply lazy loading by default", () => {
    render(
      <OptimizedImage src="https://example.com/image.jpg" alt="Test image" />
    );

    const img = screen.getByAltText("Test image");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("should use eager loading when priority is true", () => {
    render(
      <OptimizedImage
        src="https://example.com/image.jpg"
        alt="Test image"
        priority={true}
      />
    );

    const img = screen.getByAltText("Test image");
    expect(img).toHaveAttribute("loading", "eager");
  });

  it("should have decoding attribute set to async", () => {
    render(
      <OptimizedImage src="https://example.com/image.jpg" alt="Test image" />
    );

    const img = screen.getByAltText("Test image");
    expect(img).toHaveAttribute("decoding", "async");
  });

  it("should apply custom className", () => {
    const { container } = render(
      <OptimizedImage
        src="https://example.com/image.jpg"
        alt="Test image"
        className="custom-class"
      />
    );

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
