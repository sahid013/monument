import styles from "./StatCircle.module.css";

type StatCircleProps = {
  value: string;
  label?: string;
};

export default function StatCircle({ value, label }: StatCircleProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.number}>{value}</span>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
