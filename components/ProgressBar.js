import styles from './ProgressBar.module.scss';

export default function ProgressBar({
  value = 0,
  label,
  suffix,
  size = 'md',
  tone = 'brand',
  showValue = true,
}) {
  const percent = Math.max(0, Math.min(100, value));

  return (
    <div className={styles.wrap}>
      {(label || showValue) && (
        <div className={styles.meta}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && (
            <span className={styles.value}>
              {percent}%{suffix ? ` ${suffix}` : ''}
            </span>
          )}
        </div>
      )}
      <div
        className={`${styles.track} ${styles[`size-${size}`]}`}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`${styles.fill} ${styles[`tone-${tone}`]}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
