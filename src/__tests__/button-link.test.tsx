import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);
import { ButtonLink } from "@/components/button-link";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("ButtonLink", () => {
  test("renders children", () => {
    render(<ButtonLink href="/order">Order now</ButtonLink>);
    expect(screen.getByText("Order now")).toBeDefined();
  });

  test("internal link renders as next/link anchor", () => {
    render(<ButtonLink href="/menu">Menu</ButtonLink>);
    const link = screen.getByRole("link", { name: "Menu" });
    expect(link.getAttribute("href")).toBe("/menu");
    expect(link.getAttribute("target")).toBeNull();
  });

  test("external link opens in new tab", () => {
    render(<ButtonLink href="https://instagram.com" external>Instagram</ButtonLink>);
    const link = screen.getByRole("link", { name: /instagram/i });
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });

  test("external link includes sr-only new tab notice", () => {
    render(<ButtonLink href="https://instagram.com" external>Instagram</ButtonLink>);
    expect(screen.getByText("(opens in new tab)")).toBeDefined();
  });

  test("primary variant applies cocoa background class", () => {
    render(<ButtonLink href="/order">Order</ButtonLink>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-[var(--color-cocoa)]");
  });

  test("secondary variant applies border class", () => {
    render(<ButtonLink href="/order" variant="secondary">Order</ButtonLink>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("border");
  });
});
