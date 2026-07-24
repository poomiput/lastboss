import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './article.module.scss';
import Badge from '../../../../components/Badge';
import { ARTICLES, FIELD_EXPERT, getArticleBySlug, TAG_COLORS, CATEGORY_LABELS } from '../../../../lib/data';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'ไม่พบบทความ | PathFinder' };
  return {
    title: `${article.title} | PathFinder`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link href="/courses/insights" className={styles.backLink}>
            ← กลับไปยังบทความทั้งหมด
          </Link>

          <div className={styles.tagRow}>
            {article.tags.map((tag) => (
              <Badge key={tag} tone={TAG_COLORS[tag]}>
                {CATEGORY_LABELS[tag]}
              </Badge>
            ))}
          </div>

          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.byline}>
            <span className={styles.avatar} aria-hidden="true">
              {FIELD_EXPERT.avatarInitials}
            </span>
            <div>
              <span className={styles.authorName}>{FIELD_EXPERT.name}</span>
              <span className={styles.authorMeta}>
                {FIELD_EXPERT.title} · ประสบการณ์ {FIELD_EXPERT.yearsExperience} ปี · อ่าน {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={`container ${styles.body}`}>
        <article className={styles.article}>
          <p className={styles.excerpt}>{article.excerpt}</p>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          <div className={styles.levelTag}>
            <span className={styles.levelTagLabel}>เกี่ยวข้องกับระดับ</span>
            <div className={styles.levelTagList}>
              {article.relatedLevels.map((level) => (
                <span key={level} className={styles.levelPill}>
                  {level}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className={styles.authorFooter}>
          <span className={styles.avatarLg} aria-hidden="true">
            {FIELD_EXPERT.avatarInitials}
          </span>
          <div>
            <span className={styles.authorFooterName}>
              เขียนโดย {FIELD_EXPERT.name} ({FIELD_EXPERT.nameEn})
            </span>
            <p className={styles.authorFooterBio}>{FIELD_EXPERT.bio}</p>
          </div>
        </div>

        {otherArticles.length > 0 && (
          <div className={styles.moreSection}>
            <h2 className={styles.moreTitle}>บทความอื่นจากหน้างานจริง</h2>
            <div className={styles.moreGrid}>
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/courses/insights/${a.slug}`} className={styles.moreCard}>
                  <span className={styles.moreCardReadTime}>{a.readTime}</span>
                  <h3 className={styles.moreCardTitle}>{a.title}</h3>
                  <span className={styles.moreCardLink}>อ่านบทความ →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
