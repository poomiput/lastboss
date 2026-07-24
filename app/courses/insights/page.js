import Link from "next/link";
import styles from "./insights.module.scss";
import Badge from "../../../components/Badge";
import {
  ARTICLES,
  FIELD_EXPERT,
  TAG_COLORS,
  CATEGORY_LABELS,
} from "../../../lib/data";

export const metadata = {
  title: "บทความจากหน้างานจริง | PathFinder",
  description: `บทความจากประสบการณ์ตรงของ ${FIELD_EXPERT.name} ผู้ทำงานสายปฏิบัติการมา ${FIELD_EXPERT.yearsExperience} ปี`,
};

export default function InsightsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/courses" className={styles.backLink}>
            ← กลับไปยังคอร์สทั้งหมด
          </Link>

          <span className={styles.eyebrow}>จากหน้างานจริง</span>
          <h1 className={styles.heading}>
            บทความจากผู้มีประสบการณ์ตรงหน้างาน {FIELD_EXPERT.yearsExperience} ปี
          </h1>
          <p className={styles.subheading}>
            เสริมมุมมองที่คอร์สเรียนให้ไม่ได้ทั้งหมด — บทเรียน ข้อผิดพลาด
            และวิธีตัดสินใจจริงหน้างาน จากคนที่ผ่านมันมาด้วยตัวเอง
          </p>

          <div className={styles.authorCard}>
            <span className={styles.authorAvatar} aria-hidden="true">
              {FIELD_EXPERT.avatarInitials}
            </span>
            <div>
              <span className={styles.authorName}>
                {FIELD_EXPERT.name}{" "}
                <span className={styles.authorNameEn}>
                  ({FIELD_EXPERT.nameEn})
                </span>
              </span>
              <span className={styles.authorTitle}>
                {FIELD_EXPERT.title} · ประสบการณ์ {FIELD_EXPERT.yearsExperience}{" "}
                ปี
              </span>
              <p className={styles.authorBio}>{FIELD_EXPERT.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.articleList}>
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/courses/insights/${article.slug}`}
              className={styles.articleCard}
            >
              <div className={styles.articleTop}>
                <div className={styles.tagRow}>
                  {article.tags.map((tag) => (
                    <Badge key={tag} tone={TAG_COLORS[tag]}>
                      {CATEGORY_LABELS[tag]}
                    </Badge>
                  ))}
                </div>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>

              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              <div className={styles.articleFooter}>
                <span className={styles.relatedLevels}>
                  เกี่ยวข้องกับระดับ {article.relatedLevels.join(", ")}
                </span>
                <span className={styles.readLink}>อ่านบทความ →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
