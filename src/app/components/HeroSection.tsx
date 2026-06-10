import styles from "./HeroSection.module.css";
import typography from "./ui/Typography.module.css";
import Typography from "./ui/Typography";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import StatCircle from "./ui/StatCircle";
import Ticker from "./ui/Ticker";

const stats = ["45x", "120+", "98%"];

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
            <em className={typography.titleItalic}>monument</em> industry
          </Typography>

          <Typography variant="body" className={styles.description}>
            An agency only serving monument and headstone companies. We build
            your online presence, generate more leads, and modernize your
            operations, &nbsp;from websites and local SEO to software that
            streamlines how you run your business
          </Typography>

          <div className={styles.bottomRow}>
            <div className={styles.stats}>
              {stats.map((stat, i) => (
                <StatCircle key={i} value={stat} />
              ))}
            </div>

            <div className={styles.actions}>
              <Button variant="primary">Book a Free Call</Button>
              <Button variant="secondary">Services</Button>
            </div>
          </div>
        </div>
      </div>

      <Ticker items={tickerItems} />
    </section>
  );
}
