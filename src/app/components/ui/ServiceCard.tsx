"use client";

import type { ReactNode } from "react";
import styles from "./ServiceCard.module.css";
import typography from "./Typography.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
  result: string;
  icon: ReactNode;
  href?: string;
};

export default function ServiceCard({
  title,
  description,
  result,
  icon,
  href = "#",
}: ServiceCardProps) {
  return (
    <a
      className={styles.card}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <h3 className={`${typography.cardTitle} ${styles.title}`}>{title}</h3>
      <p className={`${typography.body} ${styles.description}`}>{description}</p>
      <span className={`${typography.caption} ${styles.result}`}>
        <span className={styles.resultLabel}>Results</span>
        {result}
      </span>
    </a>
  );
}
