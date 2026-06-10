import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import ServiceCard from "./ui/ServiceCard";
import Reveal from "./ui/Reveal";
import typography from "./ui/Typography.module.css";
import styles from "./ServicesSection.module.css";

const services = [
  {
    index: "01",
    title: "Websites",
    description:
      "Fast, modern sites built to earn trust with families and turn quiet visitors into booked appointments, not just nice pictures that sit there.",
  },
  {
    index: "02",
    title: "SEO",
    description:
      "When someone nearby searches for a headstone or monument, you should be the first name they see. We get you ranking, and keep you there.",
  },
  {
    index: "03",
    title: "Google Ads",
    description:
      "Targeted campaigns that put you in front of ready-to-buy customers at the exact moment they're looking, with every dollar accounted for.",
  },
  {
    index: "04",
    title: "Operations Growth",
    description:
      "Software and systems that streamline quotes, follow-ups, and the daily grind, so you can grow without drowning in busywork.",
  },
];

export default function ServicesSection() {
  return (
    <Section id="services">
      <Reveal className={styles.header}>
        <Eyebrow>What We Do</Eyebrow>
        <Typography variant="sectionTitle" className={styles.title}>
          Everything you need to{" "}
          <em className={typography.titleItalic}>grow</em>, under one roof
        </Typography>
        <Typography variant="body" className={styles.intro}>
          Four services that work together to bring you more of the right
          customers and help you run a tighter, more profitable business.
        </Typography>
      </Reveal>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <Reveal key={service.index} delay={i * 120} className={styles.gridItem}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
