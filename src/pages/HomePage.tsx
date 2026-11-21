import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Clock,
  Compass,
  GraduationCap,
  Quote,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import {
  ARTICLES,
  COURSES,
  PROJECTS,
  PUBLICATIONS,
  RoutePath,
  SITE_INFO,
  TESTIMONIALS,
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenConsult: (courseId?: string) => void;
  onOpenProject: (slug: string) => void;
  onOpenArticle: (slug: string) => void;
}

const PERSONA_OPTIONS = [
  {
    id: 'marketing-foundation',
    label: 'Mới bắt đầu / Trái ngành',
    desc: 'Muốn học bài bản từ gốc để tự tin làm nghề hoặc tự vận hành marketing.',
  },
  {
    id: 'content-brand-storytelling',
    label: 'Content / Brand Executive',
    desc: 'Đã đi làm, muốn nâng cấp lên tư duy hệ thống nội dung & storytelling chuyển đổi.',
  },
  {
    id: 'growth-performance-mentoring',
    label: 'Leader / Founder SME',
    desc: 'Cần kiểm soát phễu doanh thu, chỉ số CAC/LTV/ROAS và scale ngân sách.',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsult,
  onOpenProject,
  onOpenArticle,
}) => {
  const [selectedPersona, setSelectedPersona] = useState<string>(COURSES[1].id);
  const recommendedCourse =
    COURSES.find((c) => c.id === selectedPersona) || COURSES[0];

  const marqueeItems = [
    'BRAND STRATEGY',
    'GROWTH MARKETING',
    'CONTENT OS',
    '1.200+ HỌC VIÊN',
    'ROAS 4.6X',
    'MBA STRATEGIC MARKETING',
    '24+ DOANH NGHIỆP CỐ VẤN',
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <Zap size={13} /> Thục Hoa Marketing · 2026 Edition
            </span>
            <h1 className="hero-title">
              Biến tư duy Marketing thành{' '}
              <span className="gradient-text">cỗ máy tăng trưởng</span> thực chiến
            </h1>
            <p className="hero-desc">{SITE_INFO.heroSubheadline}</p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn--accent"
                onClick={() => onOpenConsult()}
              >
                Đăng ký tư vấn khóa học 1:1 <ArrowRight size={17} />
              </button>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => onNavigate('/ho-so-nang-luc')}
              >
                Khám phá Hồ sơ năng lực
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-pill">
                <div className="stat-value">8+ năm</div>
                <div className="stat-label">Chiến lược &amp; Thực chiến</div>
              </div>
              <div className="stat-pill">
                <div className="stat-value">1.200+</div>
                <div className="stat-label">Học viên đã đào tạo</div>
              </div>
              <div className="stat-pill">
                <div className="stat-value">4.9/5</div>
                <div className="stat-label">Đánh giá hài lòng</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-portrait-frame">
              <img
                src="./images/thuc-hoa-portrait.png"
                alt="Chân dung Thục Hoa — Chuyên gia Chiến lược Marketing & Giảng viên"
              />
            </div>
            <div className="hero-floating-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                <GraduationCap size={16} /> MBA Marketing Chiến lược
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                Cố vấn trực tiếp lộ trình khóa học &amp; dự án thật cho từng học viên.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bento Grid: Giới thiệu & Giá trị cốt lõi */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Giới thiệu &amp; Năng lực</span>
            <h2 className="section-title">
              Kết hợp <span className="gradient-text">Học thuật chuẩn mực</span> &amp; Thực chiến
              tăng trưởng
            </h2>
          </div>

          <div className="bento-grid">
            <div
              className="card card--interactive bento-span-7"
              style={{
                background:
                  'linear-gradient(145deg, rgba(139, 92, 246, 0.16), rgba(18, 21, 34, 0.9))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 20,
              }}
            >
              <div>
                <span className="tag" style={{ marginBottom: 14 }}>
                  Về Thục Hoa
                </span>
                <h3 style={{ fontSize: '1.7rem', marginBottom: 12 }}>
                  Từ Head of Brand &amp; Growth đến Mentor của hơn 1.200 Marketer
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                  Sở hữu bằng Thạc sĩ Marketing Chiến lược (UEH) cùng các chứng chỉ quốc tế từ
                  Google, Meta và HubSpot, tôi thiết kế chương trình học tập trung vào{' '}
                  <strong style={{ color: '#fff' }}>tư duy gốc + dữ liệu thật</strong> để bạn tự
                  tin giải quyết mọi bài toán thị trường.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => onNavigate('/gioi-thieu')}
                >
                  Đọc câu chuyện của tôi <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => onNavigate('/ho-so-nang-luc', 'hoc-van')}
                >
                  Học vấn &amp; Chứng chỉ
                </button>
              </div>
            </div>

            <div className="card card--interactive bento-span-5">
              <TrendingUp size={28} color="var(--accent-cyan)" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.35rem', marginBottom: 10 }}>
                Không dạy mẹo vặt nhất thời
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', marginBottom: 18 }}>
                Thuật toán thay đổi mỗi tháng. Bạn được trang bị hệ thống STP, Brand Architecture,
                Content OS và Unit Economics để làm chủ mọi nền tảng.
              </p>
              <button
                type="button"
                className="btn btn--outline btn--sm"
                onClick={() => onNavigate('/ho-so-nang-luc', 'ky-nang')}
              >
                Xem bản đồ kỹ năng <ArrowRight size={14} />
              </button>
            </div>

            <div className="card card--interactive bento-span-4">
              <Award size={26} color="var(--accent-coral)" style={{ marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>Sửa bài 1:1 trên dự án thật</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Mỗi học viên tốt nghiệp đều sở hữu một bản kế hoạch Marketing hoặc Portfolio hoàn
                chỉnh đã được Thục Hoa trực tiếp góp ý.
              </p>
            </div>

            <div
              className="card card--interactive bento-span-8"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
              }}
            >
              <div style={{ maxWidth: 460 }}>
                <Users size={26} color="var(--accent-emerald)" style={{ marginBottom: 10 }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>
                  24+ Doanh nghiệp đã cố vấn &amp; đào tạo In-house
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  Từ Mỹ phẩm D2C, EdTech đến chuỗi F&amp;B bán lẻ với mức tăng trưởng đo lường rõ
                  ràng.
                </p>
              </div>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => onNavigate('/du-an')}
              >
                Xem Dự án tiêu biểu <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Course Recommender */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">
              <Compass size={14} /> Tư vấn khóa học thông minh
            </span>
            <h2 className="section-title">
              Chọn đúng <span className="gradient-text">lộ trình khóa học</span> trong 10 giây
            </h2>
            <p className="section-subtitle">
              Chọn vị trí hiện tại của bạn bên dưới để xem ngay chương trình đào tạo phù hợp nhất.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: 28 }}>
            {PERSONA_OPTIONS.map((opt) => {
              const active = selectedPersona === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedPersona(opt.id)}
                  className="card"
                  style={{
                    textAlign: 'left',
                    borderColor: active ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    background: active
                      ? 'linear-gradient(145deg, rgba(34, 211, 238, 0.14), rgba(139, 92, 246, 0.14))'
                      : 'var(--bg-card)',
                    boxShadow: active ? '0 0 36px rgba(34, 211, 238, 0.18)' : 'var(--shadow-card)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    <span className={active ? 'tag' : 'tag tag--neutral'}>
                      {active ? 'Đang chọn' : 'Lựa chọn'}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: 6,
                    }}
                  >
                    {opt.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Highlighted Recommended Course */}
          <div
            className="card"
            style={{
              padding: 34,
              borderColor: 'rgba(139, 92, 246, 0.45)',
              background:
                'linear-gradient(135deg, rgba(18, 21, 34, 0.95), rgba(30, 27, 60, 0.82))',
            }}
          >
            <div className="grid-2" style={{ gap: 36, alignItems: 'center' }}>
              <div>
                <span className="tag tag--terracotta" style={{ marginBottom: 14 }}>
                  Đề xuất dành cho bạn · {recommendedCourse.badge}
                </span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: 10 }}>
                  {recommendedCourse.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 18 }}>
                  {recommendedCourse.subtitle}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 16,
                    fontSize: '0.88rem',
                    color: 'var(--accent-cyan)',
                    marginBottom: 22,
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={15} /> {recommendedCourse.duration}
                  </span>
                  <span>· {recommendedCourse.format}</span>
                </div>
                <button
                  type="button"
                  className="btn btn--accent"
                  onClick={() => onOpenConsult(recommendedCourse.id)}
                >
                  Đặt lịch tư vấn 1:1 khóa này <ArrowRight size={16} />
                </button>
              </div>

              <div
                style={{
                  background: 'rgba(7, 8, 13, 0.55)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 22,
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--accent-cyan)',
                    marginBottom: 12,
                  }}
                >
                  Lộ trình học phần chính
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
                  {recommendedCourse.modules.map((mod) => (
                    <div
                      key={mod}
                      style={{
                        fontSize: '0.9rem',
                        color: '#e2e8f0',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      {mod}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {recommendedCourse.outcomes.map((out) => (
                    <div
                      key={out}
                      style={{
                        display: 'flex',
                        gap: 8,
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dự án tiêu biểu */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 20,
              marginBottom: 42,
            }}
          >
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Dự án tiêu biểu</span>
              <h2 className="section-title">Case Study tăng trưởng đột phá</h2>
            </div>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => onNavigate('/du-an')}
            >
              Xem tất cả dự án <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3">
            {PROJECTS.map((project) => (
              <div
                key={project.slug}
                className="card card--interactive"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--accent-coral)',
                      marginBottom: 8,
                    }}
                  >
                    {project.impactHeadline}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                    {project.summary}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => onOpenProject(project.slug)}
                >
                  Đọc Case Study chi tiết <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ấn phẩm & Bài viết */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 44, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">
                <BookOpen size={14} /> Ấn phẩm &amp; Bài viết
              </span>
              <h2 className="section-title">Playbook &amp; Góc nhìn Marketing hiện đại</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Tải trọn bộ Framework thực hành và đọc các bài phân tích chiến lược cập nhật nhất.
              </p>
              <div
                style={{
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.14)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <img
                  src="./images/publication-flatlay.png"
                  alt="Ấn phẩm Marketing Thục Hoa"
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => onNavigate('/an-pham')}
                >
                  Khám phá Ấn phẩm ({PUBLICATIONS.length})
                </button>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => onNavigate('/bai-viet')}
                >
                  Đọc Bài viết Marketing
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ARTICLES.slice(0, 3).map((article) => (
                <div
                  key={article.slug}
                  className="card card--interactive"
                  style={{ padding: 22, cursor: 'pointer' }}
                  onClick={() => onOpenArticle(article.slug)}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    <span className="tag">{article.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {article.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.14rem', marginBottom: 6 }}>{article.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {article.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">Kết quả thật từ Học viên &amp; Đối tác</h2>
          </div>

          <div className="grid-3">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="card card--interactive">
                <Quote size={24} color="var(--accent-cyan)" style={{ marginBottom: 14 }} />
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    marginBottom: 18,
                    fontStyle: 'italic',
                  }}
                >
                  “{item.quote}”
                </p>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                    {item.role} · {item.organization}
                  </div>
                  <span className="tag tag--terracotta" style={{ marginTop: 10 }}>
                    {item.resultTag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => onNavigate('/testimonials')}
            >
              Xem thêm Testimonials <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              textAlign: 'center',
              padding: '56px 28px',
              background:
                'linear-gradient(135deg, rgba(139, 92, 246, 0.24), rgba(34, 211, 238, 0.14))',
              borderColor: 'rgba(139, 92, 246, 0.45)',
            }}
          >
            <span className="eyebrow">
              <Sparkles size={14} /> Bắt đầu ngay hôm nay
            </span>
            <h2 className="section-title" style={{ maxWidth: 740, margin: '0 auto 14px' }}>
              Sẵn sàng nâng cấp tư duy Marketing &amp; sự nghiệp của bạn?
            </h2>
            <p className="section-subtitle" style={{ maxWidth: 620, margin: '0 auto 28px' }}>
              Đặt lịch tư vấn 1:1 miễn phí 20 phút cùng Thục Hoa để nhận lộ trình khóa học cá
              nhân hóa.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
              <button
                type="button"
                className="btn btn--accent"
                onClick={() => onOpenConsult()}
              >
                Đăng ký tư vấn khóa học ngay <ArrowRight size={17} />
              </button>
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => onNavigate('/lien-he')}
              >
                Đi đến trang Liên hệ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
