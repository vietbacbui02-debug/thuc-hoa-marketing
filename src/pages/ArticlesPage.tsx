import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { ARTICLES, Article, RoutePath } from '../data/siteData';

interface ArticlesPageProps {
  selectedSlug?: string;
  onNavigate: (path: RoutePath) => void;
  onSelectArticle: (slug?: string) => void;
  onOpenConsult: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  selectedSlug,
  onNavigate,
  onSelectArticle,
  onOpenConsult,
}) => {
  const [category, setCategory] = useState<string>('Tất cả');
  const categories = ['Tất cả', 'Chiến lược', 'Thương hiệu cá nhân', 'Performance', 'Định hướng học tập'];

  const activeArticle: Article | undefined = selectedSlug
    ? ARTICLES.find((a) => a.slug === selectedSlug)
    : undefined;

  if (activeArticle) {
    return (
      <>
        <section className="page-banner">
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="breadcrumb">
              <button type="button" onClick={() => onNavigate('/')}>
                Trang chủ
              </button>
              <span>/</span>
              <button type="button" onClick={() => onSelectArticle(undefined)}>
                Bài viết Marketing
              </button>
            </div>
            <span className="tag tag--terracotta" style={{ marginBottom: 14 }}>
              {activeArticle.category}
            </span>
            <h1 className="section-title">{activeArticle.title}</h1>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Đăng ngày {activeArticle.date} · {activeArticle.readTime} · Tác giả: Thục Hoa
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 820 }}>
            <div
              className="card"
              style={{
                padding: '36px 38px',
                display: 'flex',
                flexDirection: 'column',
                gap: 28,
              }}
            >
              <p
                style={{
                  fontSize: '1.12rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  borderLeft: '3px solid var(--accent-terracotta)',
                  paddingLeft: 18,
                }}
              >
                {activeArticle.excerpt}
              </p>

              {activeArticle.content.map((sec) => (
                <div key={sec.heading}>
                  <h2 style={{ fontSize: '1.45rem', marginBottom: 12 }}>{sec.heading}</h2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      color: 'var(--text-secondary)',
                      fontSize: '1rem',
                    }}
                  >
                    {sec.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: 24,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  gap: 14,
                }}
              >
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => onSelectArticle(undefined)}
                >
                  <ArrowLeft size={16} /> Tất cả bài viết
                </button>
                <button type="button" className="btn btn--accent" onClick={onOpenConsult}>
                  Đăng ký tư vấn khóa học liên quan
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const filtered =
    category === 'Tất cả' ? ARTICLES : ARTICLES.filter((a) => a.category === category);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Bài viết Marketing</span>
          </div>
          <span className="eyebrow">
            <FileText size={14} /> Góc nhìn chuyên môn
          </span>
          <h1 className="section-title">Bài viết Marketing &amp; Định hướng nghề nghiệp</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Chia sẻ thẳng thắn về chiến lược thương hiệu, nội dung, số liệu hiệu suất và cách học
            Marketing hiệu quả.
          </p>

          <div className="subnav-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`subnav-pill ${category === cat ? 'subnav-pill--active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {filtered.map((article) => (
              <div
                key={article.slug}
                className="card card--interactive"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectArticle(article.slug)}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}
                  >
                    <span className="tag">{article.category}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {article.date} · {article.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.35rem', marginBottom: 10 }}>{article.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
                    {article.excerpt}
                  </p>
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: 'var(--accent-sage)',
                  }}
                >
                  Đọc chi tiết <ArrowRight size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
