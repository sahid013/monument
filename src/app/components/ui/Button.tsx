"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import typography from "./Typography.module.css";

// Omit the DOM drag/animation handlers that clash with Framer Motion's props.
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDragStart" | "onDragEnd" | "onDrag"
>;

type ButtonProps = NativeButtonProps & {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    typography.buttonLabel,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      className={classes}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
