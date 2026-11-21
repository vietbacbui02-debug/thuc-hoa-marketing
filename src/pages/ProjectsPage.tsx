import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { CaseStudyProject, PROJECTS, RoutePath } from '../data/siteData';

interface ProjectsPageProps {
  mode: 'list' | 'detail';
  selectedSlug?: string;
  onNavigate: (path: RoutePath, hash?: string) => void;
  onSelectProject: (slug: string) => void;
  onOpenConsult: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  mode,
  selectedSlug,
  onNavigate,
  onSelectProject,
  onOpenConsult,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('Tất cả');

  const allTags = ['Tất cả', 'Brand Strategy', 'Content System', 'Performance', 'Launch Campaign', 'In-house Training'];

  const filteredProjects =
    activeFilter === 'Tất cả'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  const currentProject: CaseStudyProject =
    PROJECTS.find((p) => p.slug === selectedSlug) || PROJECTS[0];

  if (mode === 'detail') {
    return (
      <>
        <section className="page-banner">
          <div className="container">
            <div className="breadcrumb">
              <button type="button" onClick={() => onNavigate('/')}>
                Trang chủ
              </button>
              <span>/</span>
              <button type="button" onClick={() => onNavigate('/du-an')}>
                Dự án tiêu biểu
              </button>
              <span>/</span>
              <span>Case Study chi tiết</span>
            </div>

            <div className="subnav-pills" style={{ marginTop: 8, marginBottom: 22 }}>
              {PROJECTS.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  className={`subnav-pill ${
                    p.slug === currentProject.slug ? 'subnav-pill--active' : ''
                  }`}
                  onClick={() => onSelectProject(p.slug)}
                >
                  {p.client}
                </button>
              ))}
            </div>

            <span className="eyebrow">
              Case Study · {currentProject.industry} · {currentProject.year}
            </span>
            <h1 className="section-title" style={{ maxWidth: 860 }}>
              {currentProject.title}
            </h1>
            <p className="section-subtitle" style={{ maxWidth: 740 }}>
              {currentProject.summary}
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/* Key Metrics */}
            <div className="grid-3" style={{ marginBottom: 42 }}>
              {currentProject.metrics.map((m) => (
                <div
                  key={m.label}
                  className="card"
                  style={{
                    textAlign: 'center',
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'transparent',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.4rem',
                      fontWeight: 700,
                      color: 'var(--accent-terracotta)',
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, marginTop: 4 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Structured Breakdown */}
            <div className="grid-2" style={{ gap: 32, marginBottom: 32 }}>
              <div className="card">
                <span className="tag" style={{ marginBottom: 12 }}>
                  01 · Bối cảnh (Context)
                </span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 10 }}>
                  Hiện trạng trước khi triển khai
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{currentProject.context}</p>
              </div>

              <div className="card">
                <span className="tag tag--terracotta" style={{ marginBottom: 12 }}>
                  02 · Thách thức (Challenge)
                </span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 10 }}>
                  Bài toán cốt lõi cần giải quyết
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{currentProject.challenge}</p>
              </div>
            </div>

            <div className="grid-2" style={{ gap: 32, marginBottom: 32 }}>
              <div className="card">
                <span className="tag" style={{ marginBottom: 12 }}>
                  03 · Chiến lược (Strategy)
                </span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 14 }}>Định hướng giải pháp</h3>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--text-secondary)' }}>
                  {currentProject.strategy.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <span className="tag" style={{ marginBottom: 12 }}>
                  04 · Thực thi (Execution)
                </span>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 14 }}>Các hạng mục triển khai</h3>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--text-secondary)' }}>
                  {currentProject.execution.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="card"
              style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--text-on-dark)',
                padding: 36,
              }}
            >
              <span className="eyebrow">05 · Kết quả đo lường</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 18, color: '#fff' }}>
                Tác động thực tế sau chiến dịch
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {currentProject.results.map((r) => (
                  <div key={r} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <CheckCircle2
                      size={18}
                      color="var(--accent-terracotta)"
                      style={{ flexShrink: 0, marginTop: 4 }}
                    />
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <button type="button" className="btn btn--accent" onClick={onOpenConsult}>
                  Học cách xây dựng Case Study tương tự
                </button>
                <button
                  type="button"
                  className="btn btn--outline-light"
                  onClick={() => onNavigate('/du-an')}
                >
                  <ArrowLeft size={16} /> Quay lại danh sách dự án
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Dự án tiêu biểu</span>
          </div>
          <span className="eyebrow">
            <Layers size={14} /> Portfolio Dự án
          </span>
          <h1 className="section-title">Dự án tiêu biểu &amp; Case Study thực chiến</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Những dự án tư vấn chiến lược, tái định vị thương hiệu và đào tạo In-house đã mang lại
            kết quả tăng trưởng đo lường được.
          </p>

          <div className="subnav-pills">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`subnav-pill ${
                  activeFilter === tag ? 'subnav-pill--active' : ''
                }`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="card card--interactive"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
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
                    <span className="tag">{project.industry}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {project.year}
                    </span>
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: 'var(--accent-terracotta)',
                      fontSize: '0.9rem',
                      marginBottom: 6,
                    }}
                  >
                    {project.impactHeadline}
                  </div>
                  <h2 style={{ fontSize: '1.28rem', marginBottom: 10 }}>{project.title}</h2>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 18,
                    }}
                  >
                    {project.summary}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {project.tags.map((t) => (
                      <span key={t} className="tag tag--neutral">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => onSelectProject(project.slug)}
                >
                  Xem Case Study chi tiết <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
