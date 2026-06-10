"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import typography from "./ui/Typography.module.css";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Fade in the frosted background as soon as the user starts scrolling.
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.navbar}>
      <motion.div
        className={styles.background}
        aria-hidden="true"
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div className={styles.inner}>
        <a href="#" className={styles.brand} aria-label="Monument home">
          <Image
            src="/monument-logo.svg"
            alt="Monument"
            width={206}
            height={30}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={typography.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" size="sm" className={styles.cta}>
          Get a Free Strategy Call
        </Button>
      </div>
    </header>
  );
}
