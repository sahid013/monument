import { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  className?: string;
  /** Apply consistent max-width + horizontal padding to children (default true). */
  contained?: boolean;
  children: ReactNode;
};

/** Vertical-rhythm wrapper that keeps every section's spacing consistent. */
export default function Section({
  id,
  className,
  contained = true,
  children,
}: SectionProps) {
  const sectionClasses = [styles.section, className].filter(Boolean).join(" ");
  return (
    <section id={id} className={sectionClasses}>
      {contained ? (
        <div className={styles.container}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
