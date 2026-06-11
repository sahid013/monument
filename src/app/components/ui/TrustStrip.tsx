import { Fragment } from "react";
import Image from "next/image";
import styles from "./TrustStrip.module.css";

const logos = [
  { src: "/Builders Logo.svg", label: "Builders", width: 377, height: 279 },
  { src: "/partner 2.svg", label: "Partner 2", width: 262, height: 262 },
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
