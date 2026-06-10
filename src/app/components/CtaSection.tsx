import Section from "./ui/Section";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import typography from "./ui/Typography.module.css";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <Section id="contact">
      <Reveal className={styles.panel}>
        <Typography variant="sectionTitle" className={styles.title}>
          Ready to grow your{" "}
          <em className={typography.titleItalic}>monument</em> business?
        </Typography>
        <Typography variant="body" className={styles.text}>
          Book a free, no-pressure call. We&apos;ll look at where you are, where
          you want to be, and exactly how we&apos;d get you there.
        </Typography>
        <div className={styles.actions}>
          <Button variant="primary">Book a Free Call</Button>
          <Button variant="secondary">See Our Services</Button>
        </div>
      </Reveal>
    </Section>
  );
}
