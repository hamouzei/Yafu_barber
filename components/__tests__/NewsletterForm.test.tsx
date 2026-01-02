import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsletterForm from "../NewsletterForm";

describe("NewsletterForm", () => {
  it("should render the form with email input", () => {
    render(<NewsletterForm />);

    expect(
      screen.getByLabelText(/email address for newsletter/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe/i })
    ).toBeInTheDocument();
  });

  it("should show error when email is empty", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Email address is required")).toBeInTheDocument();
    });
  });

  it("should show error for invalid email format", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    const emailInput = screen.getByLabelText(/email address for newsletter/i);
    await user.type(emailInput, "invalid-email");

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address")
      ).toBeInTheDocument();
    });
  });

  it("should accept valid email and show success message", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    const emailInput = screen.getByLabelText(/email address for newsletter/i);
    await user.type(emailInput, "test@example.com");

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    await user.click(submitButton);

    await waitFor(
      () => {
        expect(
          screen.getByText(/thank you for subscribing/i)
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  it("should disable submit button while submitting", async () => {
    const user = userEvent.setup();
    render(<NewsletterForm />);

    const emailInput = screen.getByLabelText(/email address for newsletter/i);
    await user.type(emailInput, "test@example.com");

    const submitButton = screen.getByRole("button", { name: /subscribe/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
  });

  it("should have proper ARIA attributes", () => {
    render(<NewsletterForm />);

    const emailInput = screen.getByLabelText(/email address for newsletter/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("aria-invalid", "false");
  });
});
