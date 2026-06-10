import styles from "./StatCircle.module.css";
import typography from "./Typography.module.css";

type StatCircleProps = {
  value: string;
  label?: string;
};

export default function StatCircle({ value, label }: StatCircleProps) {
  return (
    <div className={styles.stat}>
      <div className={`${styles.circle} ${typography.statLabel}`}>{value}</div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
