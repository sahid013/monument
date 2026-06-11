import Section from "./ui/Section";
import Eyebrow from "./ui/Eyebrow";
import Typography from "./ui/Typography";
import ServiceCard from "./ui/ServiceCard";
import Reveal from "./ui/Reveal";
import typography from "./ui/Typography.module.css";
import styles from "./ServicesSection.module.css";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services = [
  {
    title: "Websites",
    description:
      "Fast, modern sites built to earn trust with families and turn quiet visitors into booked appointments, not just nice pictures that sit there.",
    result: "2x more search requests from organic visitors",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M2 9h20" />
        <path d="M9 21h6" />
        <path d="M12 18v3" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description:
      "When someone nearby searches for a headstone or monument, you should be the first name they see. We get you ranking, and keep you there.",
    result: "3x more calls from Google Search",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6" />
        <path d="M11 8v6" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    description:
      "Targeted campaigns that put you in front of ready-to-buy customers at the exact moment they're looking, with every dollar accounted for.",
    result: "40% lower cost per lead than industry average",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Operations Growth",
    description:
      "Software and systems that streamline quotes, follow-ups, and the daily grind, so you can grow without drowning in busywork.",
    result: "Save 8+ hours on busy work",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <Section id="services" className={styles.light}>
      <Reveal className={styles.header}>
        <Eyebrow>What We Do</Eyebrow>
        <Typography variant="sectionTitle" className={styles.title}>
          Everything you need to{" "}
          <em className={typography.titleHighlight}>grow</em>, under one roof
        </Typography>
        <Typography variant="body" className={styles.intro}>
          Four services that work together to bring you more of the right
          customers and help you run a tighter, more profitable business.
        </Typography>
      </Reveal>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 120} className={styles.gridItem}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
