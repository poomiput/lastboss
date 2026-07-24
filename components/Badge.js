import styles from './Badge.module.scss';

// tone: purple | orange | blue | pink | green | greenSoft | teal
export default function Badge({ children, tone = 'greenSoft' }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
