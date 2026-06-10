import { ReactNode } from "react";
import typography from "./Typography.module.css";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Small uppercase overline with a leading rule, used above section titles. */
export default function Eyebrow({ children, className }: EyebrowProps) {
  const classes = [typography.eyebrow, styles.eyebrow, className]
    .filter(Boolean)
    .join(" ");
  return (
    <p className={classes}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}
