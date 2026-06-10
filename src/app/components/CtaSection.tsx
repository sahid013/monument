import Section from "./ui/Section";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import typography from "./ui/Typography.module.css";
import styles from "./CtaSection.module.css";

const offerings = [
  {
    title: "Websites That Convert",
    text: "Modern, fast sites that turn quiet visitors into booked appointments.",
  },
  {
    title: "Get Found Locally",
    text: "SEO and Google Ads that put you first when nearby families search.",
  },
  {
    title: "Run Leaner",
    text: "Software and systems that cut hours of busywork out of your week.",
  },
];

export default function CtaSection() {
  return (
    <Section id="contact" contained={false} className={styles.section}>
      <Reveal className={styles.panel}>
        <div className={styles.inner}>
          <Typography variant="sectionTitle" className={styles.title}>
            Ready to grow your{" "}
            <em className={typography.titleItalic}>monument</em> business?
          </Typography>
          <Typography variant="body" className={styles.text}>
            Book a free, no-pressure call. We&apos;ll look at where you are,
            where you want to be, and exactly how we&apos;d get you there.
          </Typography>
          <div className={styles.actions}>
            <Button variant="primary">Book a Free Call</Button>
            <Button variant="secondary">See Our Services</Button>
          </div>

          <div className={styles.boxes}>
            {offerings.map((item) => (
              <div key={item.title} className={styles.box}>
                <Typography variant="cardTitle" className={styles.boxTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body" className={styles.boxText}>
                  {item.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
