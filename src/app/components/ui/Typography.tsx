import { ElementType, ReactNode } from "react";
import styles from "./Typography.module.css";

const variantTag = {
  eyebrow: "p",
  displayTitle: "h1",
  sectionTitle: "h2",
  cardTitle: "h3",
  body: "p",
  caption: "span",
} as const;

export type TextVariant = keyof typeof variantTag;

type TypographyProps = {
  variant: TextVariant;
  /** Override the rendered HTML element (default is per-variant semantic tag). */
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Renders text with a named text style. The text style lives in
 * Typography.module.css so it stays consistent across the app.
 * Pass `className` for layout-only concerns (margins, max-width).
 */
export default function Typography({
  variant,
  as,
  className,
  children,
}: TypographyProps) {
  const Tag = (as ?? variantTag[variant]) as ElementType;
  const classes = [styles[variant], className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
