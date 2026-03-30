import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

const baseClasses =
  "inline-flex w-full sm:w-auto items-center justify-center rounded-full px-4 py-3 text-center text-[0.76rem] font-semibold leading-none tracking-[0.16em] uppercase transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:text-sm sm:tracking-[0.18em]";

const variantClasses = {
  primary:
    "bg-[var(--color-cocoa)] shadow-[0_16px_50px_rgba(61,37,24,0.24)] hover:bg-[var(--color-cocoa-deep)]",
  secondary:
    "border border-[color:var(--color-stroke)] bg-white/70 backdrop-blur-sm hover:border-[var(--color-cocoa)] hover:bg-white",
};

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, CSSProperties> = {
  primary: {
    color: "var(--color-cream)",
  },
  secondary: {
    color: "var(--color-cocoa)",
  },
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  const style = variantStyles[variant];

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        style={style}
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href} style={style}>
      {children}
    </Link>
  );
}
