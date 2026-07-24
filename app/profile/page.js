import Link from "next/link";
import styles from "./profile.module.scss";
import Badge from "../../components/Badge";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar";
import {
  EMPLOYEE,
  LEVELS,
  getLevelByCode,
  getNextLevel,
  tracksProgress,
  getOverallReadiness,
} from "../../lib/data";

const TRACK_STATUS_LABEL = {
  completed: "เรียนจบแล้ว",
  "in-progress": "กำลังดำเนินการ",
  "not-started": "ยังไม่เริ่ม",
};

export const metadata = {
  title: "โปรไฟล์ | PathFinder",
};

export default function ProfilePage() {
  const currentLevel = getLevelByCode(EMPLOYEE.levelCode);
  const nextLevel = getNextLevel(EMPLOYEE.levelCode);
  const progress = tracksProgress(EMPLOYEE);
  const readiness = getOverallReadiness();

  const timelineStart = Math.max(
    0,
    LEVELS.findIndex((l) => l.code === EMPLOYEE.levelCode) - 1,
  );
  const timeline = LEVELS.slice(timelineStart, timelineStart + 3);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div
            style={{
              border: "2px solid #00ed64",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="profile"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.heroInfo}>
            <div className={styles.heroBadges}>
              <Badge tone="green">{currentLevel.code}</Badge>
              <span className={styles.heroTrack}>{currentLevel.track}</span>
            </div>
            <h1 className={styles.name}>{EMPLOYEE.name}</h1>
            <p className={styles.nameEn}>{EMPLOYEE.nameEn}</p>
            <p className={styles.title}>
              {currentLevel.title} · {EMPLOYEE.division}
            </p>
            <p className={styles.bio}>{EMPLOYEE.bio}</p>

            <div className={styles.heroMeta}>
              <div>
                <span className={styles.metaLabel}>สังกัด</span>
                <span className={styles.metaValue}>{EMPLOYEE.department}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>สถานที่ปฏิบัติงาน</span>
                <span className={styles.metaValue}>{EMPLOYEE.location}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>อายุงาน</span>
                <span className={styles.metaValue}>
                  {EMPLOYEE.tenureYears} ปี
                </span>
              </div>
              <div>
                <span className={styles.metaLabel}>ผู้บังคับบัญชา</span>
                <span className={styles.metaValue}>
                  {EMPLOYEE.managerName} ({EMPLOYEE.managerTitle})
                </span>
              </div>
            </div>

            <Link href="/growth" className={styles.heroCta}>
              ดูแผนพัฒนาสู่ {nextLevel?.code} กับ AI Growth Analyst →
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2 className={styles.cardTitle}>เส้นทางความก้าวหน้า</h2>
              <p className={styles.cardSub}>
                ตำแหน่งปัจจุบันเทียบกับสายอาชีพในองค์กร
              </p>
            </div>

            <ol className={styles.timeline}>
              {timeline.map((level) => {
                const isCurrent = level.code === EMPLOYEE.levelCode;
                return (
                  <li
                    key={level.code}
                    className={`${styles.timelineItem} ${isCurrent ? styles.timelineItemActive : ""}`}
                  >
                    <span className={styles.timelineDot} aria-hidden="true" />
                    <div>
                      <span className={styles.timelineCode}>
                        {level.code}
                        {isCurrent && (
                          <span className={styles.currentTag}>ปัจจุบัน</span>
                        )}
                      </span>
                      <span className={styles.timelineTitle}>
                        {level.title}
                      </span>
                      <span className={styles.timelineTrack}>
                        {level.track}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2 className={styles.cardTitle}>
                ความคืบหน้าของ Track ระดับ {currentLevel.code}
              </h2>
              <p className={styles.cardSub}>
                Track ที่ทำสำเร็จแล้ว เทียบกับ Track
                ทั้งหมดที่ต้องทำในตำแหน่งปัจจุบัน
              </p>
            </div>

            <ProgressBar
              value={progress.percent}
              label={`${progress.completed} จาก ${progress.total} Track สำเร็จแล้ว`}
              size="lg"
            />

            <ul className={styles.trackList}>
              {EMPLOYEE.tracks.map((track) => (
                <li key={track.id} className={styles.trackItem}>
                  <span
                    className={`${styles.trackDot} ${styles[`trackDot-${track.status}`]}`}
                    aria-hidden="true"
                  />
                  <span className={styles.trackName}>{track.title}</span>
                  <span
                    className={`${styles.trackStatus} ${styles[`trackStatus-${track.status}`]}`}
                  >
                    {TRACK_STATUS_LABEL[track.status]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>
              ระดับความสามารถปัจจุบัน (Competencies)
            </h2>
            <p className={styles.cardSub}>
              ประเมินจาก 360 Review ล่าสุด — ใช้เป็นข้อมูลตั้งต้นให้ AI Growth
              Analyst วิเคราะห์
            </p>
          </div>

          <div className={styles.skillGrid}>
            {EMPLOYEE.skills.map((skill) => (
              <ProgressBar
                key={skill.name}
                value={skill.level}
                label={skill.name}
                tone="teal"
                size="sm"
              />
            ))}
          </div>
        </div>

        <div className={styles.readinessBanner}>
          <div>
            <span className={styles.readinessEyebrow}>AI Growth Analyst</span>
            <h2 className={styles.readinessTitle}>
              พร้อมสำหรับตำแหน่ง {nextLevel?.code} · {nextLevel?.title} แล้ว{" "}
              {readiness}%
            </h2>
            <p className={styles.readinessSub}>
              ดูรายละเอียดช่องว่างทักษะ และคอร์สที่แนะนำเพื่อเติบโตสู่ระดับถัดไป
            </p>
          </div>
          <Link href="/growth" className={styles.readinessCta}>
            เปิดแผนพัฒนา
          </Link>
        </div>
      </section>
    </>
  );
}
