"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./FaqItem.module.css";
import typography from "./Typography.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 0.4;

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className={`${typography.cardTitle} ${styles.question}`}>
          {question}
        </span>
        <motion.span
          className={styles.icon}
          aria-hidden="true"
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
        />
      </button>

      <motion.div
        className={styles.answerWrap}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration, ease: EASE }}
        style={{ overflow: "hidden" }}
      >
        <p className={`${typography.body} ${styles.answer}`}>{answer}</p>
      </motion.div>
    </div>
  );
}
