'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './courses.module.scss';
import CourseCard from '../../components/CourseCard';
import { getCoursesWithProgress, CATEGORY_LABELS, FIELD_EXPERT, ARTICLES } from '../../lib/data';

const FILTERS = [{ key: 'all', label: 'ทั้งหมด' }, ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({ key, label }))];

export default function CoursesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const courses = useMemo(() => getCoursesWithProgress(), []);

  const filtered = courses.filter((course) => {
    const matchesCategory = category === 'all' || course.category === category;
    const matchesQuery =
      query.trim().length === 0 ||
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heading}>คอร์สเรียนและกิจกรรมพัฒนา</h1>
          <p className={styles.subheading}>
            ค้นหาคอร์สเพื่อพัฒนาทักษะที่จำเป็นสำหรับตำแหน่งปัจจุบัน และตำแหน่งที่สูงขึ้น
          </p>

          <input
            className={styles.search}
            type="search"
            placeholder="ค้นหาคอร์ส เช่น Negotiation, Network Design..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="ค้นหาคอร์ส"
          />
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <Link href="/courses/insights" className={styles.insightsBanner}>
          <div>
            <span className={styles.insightsEyebrow}>จากหน้างานจริง</span>
            <h2 className={styles.insightsTitle}>
              บทความจาก {FIELD_EXPERT.name} ผู้มีประสบการณ์หน้างาน {FIELD_EXPERT.yearsExperience} ปี
            </h2>
            <p className={styles.insightsSub}>
              มุมมองที่คอร์สเรียนให้ไม่ได้ทั้งหมด — {ARTICLES.length} บทความจากคนที่ผ่านมันมาด้วยตัวเอง
            </p>
          </div>
          <span className={styles.insightsCta}>อ่านบทความ →</span>
        </Link>

        <div className={styles.filters} role="tablist" aria-label="กรองตามหมวดหมู่">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={category === f.key}
              className={`${styles.filterPill} ${category === f.key ? styles.filterPillActive : ''}`}
              onClick={() => setCategory(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>ไม่พบคอร์สที่ตรงกับคำค้นหา ลองเปลี่ยนคำค้นหาหรือหมวดหมู่</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
