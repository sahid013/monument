import Image from "next/image";
import typography from "./ui/Typography.module.css";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Who We Work With", href: "#clients" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Book a Call", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/monument-logo.svg"
              alt="Monument"
              width={206}
              height={30}
              className={styles.logo}
            />
            <p className={`${typography.caption} ${styles.tagline}`}>
              America&apos;s premier headstone &amp; monument agency. We grow
              monument businesses, and only monument businesses.
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((col) => (
              <nav key={col.title} className={styles.col}>
                <span className={styles.colTitle}>{col.title}</span>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={typography.caption}>
            © {new Date().getFullYear()} Monument. All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.link}>
              Privacy
            </a>
            <a href="#" className={styles.link}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
