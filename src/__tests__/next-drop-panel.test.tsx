import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);
import { NextDropPanel } from "@/components/next-drop-panel";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className}>{children}</div>
    ),
    p: ({ children, className }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className={className}>{children}</p>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useReducedMotion: () => false,
}));

vi.mock("@/components/button-link", () => ({
  ButtonLink: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

const baseProps = {
  locale: "en" as const,
  label: "Next drop",
  opensAt: null,
  openTimeLabel: null,
  opensLabel: "Opens",
  countdownLabel: "Until the box opens",
  pendingTitle: "The next box is being sealed.",
  pendingBody: "Release time lands here when ready.",
  liveTitle: "The drop is open now.",
  liveBody: "Move through the order flow fast.",
  pickupNote: "Boxed for KK pickup",
  reminderLabel: "Get the reminder",
  reminderHref: "https://instagram.com",
};

describe("NextDropPanel", () => {
  test("renders label", () => {
    render(<NextDropPanel {...baseProps} />);
    expect(screen.getByText("Next drop")).toBeDefined();
  });

  test("renders pending title when no opensAt", () => {
    render(<NextDropPanel {...baseProps} />);
    expect(screen.getByText("The next box is being sealed.")).toBeDefined();
  });

  test("renders pickup note", () => {
    render(<NextDropPanel {...baseProps} />);
    expect(screen.getByText("Boxed for KK pickup")).toBeDefined();
  });

  test("renders reminder link", () => {
    render(<NextDropPanel {...baseProps} />);
    expect(screen.getByText("Get the reminder")).toBeDefined();
  });

  test("renders countdown when opensAt is in the future", () => {
    const futureDate = new Date(Date.now() + 86_400_000 * 5).toISOString();
    render(
      <NextDropPanel
        {...baseProps}
        opensAt={futureDate}
        openTimeLabel="Friday, April 3, 2026"
      />
    );
    expect(screen.getByText("Until the box opens")).toBeDefined();
  });
});
