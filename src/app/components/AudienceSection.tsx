import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import typography from "./ui/Typography.module.css";
import styles from "./AudienceSection.module.css";

const points = [
  {
    title: "We speak your language",
    description:
      "We understand your buyers, your sales cycle, and the sensitivity this work demands. No learning curve, no awkward guesswork, we already get it.",
  },
  {
    title: "Playbooks that actually fit",
    description:
      "Every strategy we run is proven across real monument companies. Nothing borrowed from plumbers, dentists, or random e-commerce stores.",
  },
  {
    title: "Your market, undivided",
    description:
      "We won't take on the competitor down the road, and you'll never compete with clients from other industries for our attention. You get all of it.",
  },
];

export default function AudienceSection() {
  return (
    <Section id="clients" className={styles.light}>
      <div className={styles.layout}>
        <Reveal className={styles.intro}>
          <Eyebrow>Who We Work With</Eyebrow>
          <Typography variant="sectionTitle" className={styles.title}>
            We work with monument &amp; headstone businesses.{" "}
            <em className={typography.titleItalic}>Only.</em>
          </Typography>
          <Typography variant="body" className={styles.lead}>
            No agencies juggling a hundred industries. No generic templates
            dressed up to look custom. We&apos;ve gone all-in on one thing, helping monument and headstone companies grow, and that focus is
            exactly why our clients pull ahead of theirs.
          </Typography>
          <Button variant="primary" className={styles.cta}>
            Book a Free Consultation
          </Button>
        </Reveal>

        <div className={styles.points}>
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 120} className={styles.point}>
              <Typography variant="cardTitle" className={styles.pointTitle}>
                {point.title}
              </Typography>
              <Typography variant="body" className={styles.pointDescription}>
                {point.description}
              </Typography>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
