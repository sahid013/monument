import styles from "./ServiceCard.module.css";
import typography from "./Typography.module.css";

type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  index,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={`${typography.caption} ${styles.index}`}>{index}</span>
      <h3 className={`${typography.cardTitle} ${styles.title}`}>{title}</h3>
      <p className={`${typography.body} ${styles.description}`}>{description}</p>
    </article>
  );
}
