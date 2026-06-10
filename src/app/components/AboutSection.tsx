import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <Section id="about">
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
            After years of watching monument and headstone companies get
            overlooked by agencies that didn&apos;t understand them, I started
            Monument to fix it. Generalist marketers treat this like any other
            business. It isn&apos;t. The families you serve are making one of
            the most emotional purchases of their lives, and your marketing has
            to honor that.
          </Typography>
          <Typography variant="body" className={styles.paragraph}>
            Today we help monument businesses across America build a modern
            online presence, win more of the right customers, and run leaner
            operations. No bloated retainers, no vanity metrics, just growth
            you can measure and a partner who actually gets your world.
          </Typography>
          <div className={styles.actions}>
            <Button variant="primary">Book a Free Call</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
