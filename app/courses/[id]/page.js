'use client';

import { useMemo, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './course-detail.module.scss';
import Badge from '../../../components/Badge';
import ProgressBar from '../../../components/ProgressBar';
import { getCourseById, TAG_COLORS, CATEGORY_LABELS } from '../../../lib/data';

const STATUS_LABEL = {
  completed: 'เรียนจบแล้ว',
  'in-progress': 'กำลังเรียน',
  'not-started': 'ยังไม่เริ่มเรียน',
};

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = getCourseById(id);
  const [modules, setModules] = useState(course?.modules ?? []);

  const progress = useMemo(() => {
    if (!modules.length) return 0;
    const done = modules.filter((m) => m.completed).length;
    return Math.round((done / modules.length) * 100);
  }, [modules]);

  if (!course) {
    notFound();
  }

  const toggleModule = (moduleId) => {
    setModules((prev) =>
      prev.map((m) => (m.id === moduleId ? { ...m, completed: !m.completed } : m))
    );
  };

  const status = progress === 100 ? 'completed' : progress > 0 ? 'in-progress' : 'not-started';

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/courses" className={styles.backLink}>
            ← กลับไปยังคอร์สทั้งหมด
          </Link>

          <div className={styles.heroTop}>
            <Badge tone={TAG_COLORS[course.category]}>{CATEGORY_LABELS[course.category]}</Badge>
            <span className={styles.targetLevel}>เป้าหมายระดับ {course.targetLevel}</span>
          </div>

          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.description}>{course.description}</p>

          <div className={styles.metaRow}>
            <span>{course.duration}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>{course.format}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>ผู้สอน: {course.instructor}</span>
          </div>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.grid}>
          <div className={styles.main}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>เกี่ยวกับคอร์สนี้</h2>
              <p className={styles.longDescription}>{course.longDescription}</p>

              <div className={styles.skillTags}>
                <span className={styles.skillTagsLabel}>ทักษะที่ได้รับ</span>
                <div className={styles.skillTagsList}>
                  {course.skillsCovered.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>เนื้อหาบทเรียน ({modules.length} บท)</h2>
              <ul className={styles.moduleList}>
                {modules.map((module, idx) => (
                  <li key={module.id} className={styles.moduleItem}>
                    <button
                      type="button"
                      className={`${styles.moduleCheck} ${module.completed ? styles.moduleCheckDone : ''}`}
                      onClick={() => toggleModule(module.id)}
                      aria-pressed={module.completed}
                      aria-label={`ทำเครื่องหมาย ${module.title} ว่า${module.completed ? 'ยังไม่เรียน' : 'เรียนจบแล้ว'}`}
                    >
                      {module.completed ? '✓' : idx + 1}
                    </button>
                    <div className={styles.moduleInfo}>
                      <span
                        className={`${styles.moduleTitle} ${module.completed ? styles.moduleTitleDone : ''}`}
                      >
                        {module.title}
                      </span>
                      <span className={styles.moduleDuration}>{module.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.progressCard}>
              <span className={styles.progressLabel}>ความคืบหน้าของคุณ</span>
              <ProgressBar value={progress} showValue={false} size="lg" />
              <div className={styles.progressFooter}>
                <span className={styles.progressPercent}>{progress}%</span>
                <span className={`${styles.statusBadge} ${styles[`statusBadge-${status}`]}`}>
                  {STATUS_LABEL[status]}
                </span>
              </div>
              <p className={styles.progressHint}>
                คลิกที่หมายเลขบทเรียนด้านซ้ายเพื่อทำเครื่องหมายว่าเรียนจบแล้ว
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>ระยะเวลา</span>
                <span className={styles.infoValue}>{course.duration}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>รูปแบบ</span>
                <span className={styles.infoValue}>{course.format}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>ผู้สอน</span>
                <span className={styles.infoValue}>{course.instructor}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>เป้าหมายระดับ</span>
                <span className={styles.infoValue}>{course.targetLevel}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
