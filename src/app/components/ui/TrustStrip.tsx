import { Fragment } from "react";
import Image from "next/image";
import styles from "./TrustStrip.module.css";

const logos = [
  { src: "/bbb trust logo.webp", label: "BBB Accredited", width: 1728, height: 700 },
  { src: "/Partner 2.jpeg", label: "Partner 2", width: 363, height: 258 },
];

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <span className={styles.label}>Trusted In</span>
        <div className={styles.dividerV} aria-hidden="true" />
        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <Fragment key={logo.label}>
              {/* Vertical separator between logos (not before the first). */}
              {i > 0 && <div className={styles.logoSep} aria-hidden="true" />}
              <div className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
