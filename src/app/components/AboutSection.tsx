import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import styles from "./AboutSection.module.css";

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

const leadershipPoints = [
  "Conversion-optimized websites that turn quiet visitors into booked appointments",
  "Local SEO that puts you first when nearby families search",
  "Google Ads built to reach ready-to-buy customers, not waste clicks",
  "Operations and systems that save hours of busywork every week",
];

export default function AboutSection() {
  return (
    <Section id="about" className={styles.dark}>
      <div className={styles.layout}>
        {/* Replace this placeholder with your photo: drop a file at
            /public/about-me.jpg and swap in a <Image src="/about-me.jpg" .../>. */}
        <Reveal className={styles.photo}>
          <span className={styles.photoLabel}>Your photo here</span>
        </Reveal>

        <Reveal delay={120} className={styles.content}>
          <Eyebrow>About</Eyebrow>
          <Typography variant="sectionTitle" className={styles.title}>
            Hi, I&apos;m Alex, and I built Monument for one industry
          </Typography>

          <Typography variant="body" className={styles.paragraph}>
            Alex, founder of Monument, has spent years working directly with
            monument and headstone companies to understand one thing:{" "}
            <strong className={styles.lead}>
              What actually earns trust, calls, and booked appointments.
            </strong>
          </Typography>

          <div className={styles.callout}>
            <Typography variant="cardTitle" className={styles.calloutTitle}>
              Under Alex&apos;s Leadership
            </Typography>
            <ul className={styles.list}>
              {leadershipPoints.map((point) => (
                <li key={point} className={styles.item}>
                  <CheckIcon />
                  <span className={styles.itemText}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Typography variant="body" className={styles.paragraph}>
            When you work with us, you&apos;re not passed off to juniors. Your
            business is built with intent, experience, and accountability.
          </Typography>

          <div className={styles.actions}>
            <Button variant="primary">Book a Free Call</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
