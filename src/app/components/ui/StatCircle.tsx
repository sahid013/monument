import styles from "./StatCircle.module.css";
import typography from "./Typography.module.css";

type StatCircleProps = {
  value: string;
};

export default function StatCircle({ value }: StatCircleProps) {
  return (
    <div className={`${styles.circle} ${typography.statLabel}`}>{value}</div>
  );
}
