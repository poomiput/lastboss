import styles from './growth.module.scss';
import CourseCard from '../../components/CourseCard';
import ProgressBar from '../../components/ProgressBar';
import Badge from '../../components/Badge';
import {
  EMPLOYEE,
  getLevelByCode,
  getNextLevel,
  getSkillGapAnalysis,
  getOverallReadiness,
  getRecommendedCourses,
} from '../../lib/data';

export const metadata = {
  title: 'AI Growth Analyst | PathFinder',
};

export default function GrowthPage() {
  const currentLevel = getLevelByCode(EMPLOYEE.levelCode);
  const nextLevel = getNextLevel(EMPLOYEE.levelCode);
  const gaps = getSkillGapAnalysis();
  const readiness = getOverallReadiness();
  const recommended = getRecommendedCourses();
  const priorityGaps = gaps.filter((g) => g.gap > 0).slice(0, 2);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>AI Growth Analyst</span>
          <h1 className={styles.heading}>
            เปรียบเทียบตำแหน่ง {currentLevel.code} ของคุณ กับตำแหน่ง {nextLevel?.code}
          </h1>
          <p className={styles.subheading}>
            ระบบวิเคราะห์ทักษะและ Track การพัฒนาปัจจุบันของ {EMPLOYEE.name} เทียบกับเกณฑ์ของตำแหน่ง{' '}
            {nextLevel?.title} เพื่อชี้ช่องว่างที่ควรพัฒนา และแนะนำคอร์ส/กิจกรรมที่ตรงจุดที่สุด
          </p>

          <div className={styles.readinessCard}>
            <div>
              <span className={styles.readinessLabel}>ความพร้อมโดยรวมสู่ {nextLevel?.code}</span>
              <span className={styles.readinessValue}>{readiness}%</span>
            </div>
            <ProgressBar value={readiness} showValue={false} size="lg" />
            {priorityGaps.length > 0 && (
              <p className={styles.readinessNote}>
                จุดที่ควรให้ความสำคัญก่อน: {priorityGaps.map((g) => g.skill).join(' และ ')}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>
            Skill Gap Analysis — {currentLevel.code} → {nextLevel?.code}
          </h2>
          <p className={styles.sectionSub}>
            แท่งสีเข้มคือระดับความสามารถปัจจุบัน แท่งเส้นประคือเกณฑ์ที่ตำแหน่ง {nextLevel?.title} ต้องการ
          </p>
        </div>

        <div className={styles.gapList}>
          {gaps.map((gap) => (
            <div key={gap.skill} className={styles.gapCard}>
              <div className={styles.gapHead}>
                <h3 className={styles.gapSkill}>{gap.skill}</h3>
                {gap.gap > 0 ? (
                  <Badge tone="orange">ขาดอีก {gap.gap} จุด</Badge>
                ) : (
                  <Badge tone="greenSoft">พร้อมแล้ว</Badge>
                )}
              </div>

              <div className={styles.gapBarWrap}>
                <div className={styles.gapTrack}>
                  <div className={styles.gapFillCurrent} style={{ width: `${gap.current}%` }} />
                  <div className={styles.gapRequiredMarker} style={{ left: `${gap.required}%` }} />
                </div>
                <div className={styles.gapNumbers}>
                  <span>ปัจจุบัน {gap.current}</span>
                  <span>เกณฑ์ {nextLevel?.code}: {gap.required}</span>
                </div>
              </div>

              {gap.courses.length > 0 && (
                <div className={styles.gapCourses}>
                  <span className={styles.gapCoursesLabel}>คอร์สที่เกี่ยวข้อง</span>
                  <div className={styles.gapCourseChips}>
                    {gap.courses.map((c) => (
                      <a key={c.id} href={`/courses/${c.id}`} className={styles.gapCourseChip}>
                        {c.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>คอร์ส/สิ่งที่ควรเรียนรู้เพิ่มเติม สำหรับก้าวสู่ {nextLevel?.code}</h2>
          <p className={styles.sectionSub}>
            จัดอันดับโดย AI Analyst ตามคะแนนที่ช่วยปิดช่องว่างทักษะได้มากที่สุด
          </p>
        </div>

        <div className={styles.courseGrid}>
          {recommended.map((course, idx) => (
            <div key={course.id} className={styles.courseSlot}>
              <span className={styles.rankTag}>แนะนำอันดับ {idx + 1}</span>
              <CourseCard course={course} matchReason={course.gapSkills} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
