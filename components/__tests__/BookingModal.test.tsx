import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingModal from "../BookingModal";

describe("BookingModal", () => {
  it("should not render when isOpen is false", () => {
    const { container } = render(
      <BookingModal isOpen={false} onClose={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render when isOpen is true", () => {
    render(<BookingModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText("Book Appointment")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<BookingModal isOpen={true} onClose={handleClose} />);

    const closeButton = screen.getByLabelText("Close modal");
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should display contact information", () => {
    render(<BookingModal isOpen={true} onClose={() => {}} />);

    expect(screen.getByText(/\+251931658066/)).toBeInTheDocument();
    expect(screen.getByText(/yafubarber66@gmail.com/)).toBeInTheDocument();
  });

  it("should have proper accessibility attributes", () => {
    render(<BookingModal isOpen={true} onClose={() => {}} />);

    const modal = screen.getByRole("alert");
    expect(modal).toHaveAttribute("aria-live", "assertive");
  });
});
