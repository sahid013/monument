import { Fragment } from "react";
import styles from "./Ticker.module.css";

type TickerProps = {
  items: string[];
};

/** Custom 4-point starburst divider. */
function Divider() {
  return (
    <svg
      className={styles.divider}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 0c.6 5.3 6.7 11.4 12 12-5.3.6-11.4 6.7-12 12-.6-5.3-6.7-11.4-12-12 5.3-.6 11.4-6.7 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Ticker({ items }: TickerProps) {
  // Two identical groups make the loop seamless (track shifts by -50%).
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((group) => (
          <div className={styles.group} key={group}>
            {items.map((item, i) => (
              <Fragment key={`${group}-${i}`}>
                <span className={styles.label}>{item}</span>
                <Divider />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
