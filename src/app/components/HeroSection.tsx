import styles from "./HeroSection.module.css";
import typography from "./ui/Typography.module.css";
import Typography from "./ui/Typography";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import StatCircle from "./ui/StatCircle";
import Ticker from "./ui/Ticker";
import TrustStrip from "./ui/TrustStrip";

const stats = [
  { value: "87%", label: "of monument companies have no digital presence" },
  { value: "3.8x", label: "average increase in qualified leads within 90 days" },
  { value: "#1", label: "local Google rankings for clients in their market" },
];

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const tickerItems = [
  "Websites",
  "Local SEO",
  "Google Ads",
  "Operations Growth",
  "Lead Generation",
  "Conversion-First Design",
  "Industry Specialists",
  "Measurable Growth",
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.inner}>
        {/* Hero content */}
        <div className={styles.content}>
          <Eyebrow className={styles.eyebrow}>
            America&apos;s Premier Headstone &amp; Monument Agency
          </Eyebrow>

          <Typography variant="displayTitle" className={styles.title}>
            Growth built for the
            <br />
            <em className={typography.titleHighlight}>monument</em> industry
          </Typography>

          <Typography variant="body" className={styles.description}>
            An agency only serving monument and headstone companies. We build
            your online presence, generate more leads, and modernize your
            operations, &nbsp;from websites and local SEO to software that
            streamlines how you run your business
          </Typography>

          <div className={styles.bottomRow}>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <StatCircle
                  key={stat.value}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div className={styles.actions}>
              <Button variant="primary" className={styles.phoneButton}>
                <PhoneIcon />
                (513)-306-5595
              </Button>
              <Button variant="secondary">See How it Works</Button>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <Ticker items={tickerItems} />
    </section>
  );
}
