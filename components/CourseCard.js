import Link from 'next/link';
import styles from './CourseCard.module.scss';
import Badge from './Badge';
import ProgressBar from './ProgressBar';
import { TAG_COLORS, CATEGORY_LABELS } from '../lib/data';

const STATUS_LABEL = {
  completed: 'เรียนจบแล้ว',
  'in-progress': 'กำลังเรียน',
  'not-started': 'ยังไม่เริ่มเรียน',
};

export default function CourseCard({ course, matchReason }) {
  return (
    <Link href={`/courses/${course.id}`} className={styles.card}>
      <div className={styles.top}>
        <Badge tone={TAG_COLORS[course.category]}>{CATEGORY_LABELS[course.category]}</Badge>
        <span className={styles.targetLevel}>เป้าหมาย {course.targetLevel}</span>
      </div>

      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.description}>{course.description}</p>

      {matchReason && matchReason.length > 0 && (
        <div className={styles.matchReason}>
          <span className={styles.matchLabel}>ช่วยปิดช่องว่างด้าน</span>
          <span className={styles.matchSkills}>{matchReason.join(' · ')}</span>
        </div>
      )}

      <div className={styles.metaRow}>
        <span>{course.duration}</span>
        <span className={styles.dot} aria-hidden="true" />
        <span>{course.format}</span>
      </div>

      <div className={styles.progressRow}>
        <ProgressBar
          value={course.progress}
          size="sm"
          showValue={false}
          tone={course.status === 'completed' ? 'brand' : 'teal'}
        />
        <span className={styles.statusText}>{STATUS_LABEL[course.status]}</span>
      </div>

      <span className={styles.link}>ดูรายละเอียดคอร์ส →</span>
    </Link>
  );
}
