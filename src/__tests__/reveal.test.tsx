import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);
import { Reveal } from "@/components/reveal";

// Stub framer-motion to render children without animation
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className}>{children}</div>
    ),
  },
  useReducedMotion: () => false,
}));

describe("Reveal", () => {
  test("renders children", () => {
    render(
      <Reveal>
        <p>Visible content</p>
      </Reveal>
    );
    expect(screen.getByText("Visible content")).toBeDefined();
  });

  test("forwards className to wrapper", () => {
    render(
      <Reveal className="test-class">
        <span>Content</span>
      </Reveal>
    );
    const wrapper = screen.getByText("Content").parentElement;
    expect(wrapper?.className).toContain("test-class");
  });

  test("renders multiple children", () => {
    render(
      <Reveal>
        <p>First</p>
        <p>Second</p>
      </Reveal>
    );
    expect(screen.getByText("First")).toBeDefined();
    expect(screen.getByText("Second")).toBeDefined();
  });
});
