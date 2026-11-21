import React from 'react';
import { Award, Briefcase, CheckCircle2, GraduationCap, Trophy, ArrowRight } from 'lucide-react';
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  RoutePath,
  SKILL_GROUPS,
} from '../data/siteData';

interface PortfolioPageProps {
  activeSection?: string;
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenConsult: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  activeSection,
  onNavigate,
  onOpenConsult,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Hồ sơ năng lực</span>
          </div>
          <span className="eyebrow">Hồ sơ năng lực (Curriculum Vitae)</span>
          <h1 className="section-title">Kinh nghiệm, Học vấn, Kỹ năng &amp; Thành tựu</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Tổng hợp quá trình công tác chuyên môn, bằng cấp học thuật, chứng chỉ quốc tế và các
            chỉ số tác động thực tế trong suốt hơn 8 năm làm Marketing.
          </p>

          <div className="subnav-pills">
            {[
              { id: 'kinh-nghiem', label: 'Kinh nghiệm' },
              { id: 'hoc-van', label: 'Học vấn & Chứng chỉ' },
              { id: 'ky-nang', label: 'Kỹ năng' },
              { id: 'thanh-tuu', label: 'Thành tựu' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`subnav-pill ${
                  activeSection === tab.id ? 'subnav-pill--active' : ''
                }`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Kinh nghiệm */}
      <section id="kinh-nghiem" className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <Briefcase size={14} /> 01 · Kinh nghiệm làm việc
            </span>
            <h2 className="section-title">Lộ trình nghề nghiệp thực chiến</h2>
          </div>

          <div className="timeline">
            {EXPERIENCES.map((exp) => (
              <div key={exp.period} className="card timeline-item">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span className="tag tag--terracotta">{exp.period}</span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    {exp.location}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: 4 }}>{exp.role}</h3>
                <div
                  style={{
                    fontWeight: 600,
                    color: 'var(--accent-sage)',
                    marginBottom: 12,
                    fontSize: '0.96rem',
                  }}
                >
                  {exp.company}
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 14 }}>{exp.summary}</p>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--accent-sage)"
                        style={{ flexShrink: 0, marginTop: 4 }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Học vấn & Chứng chỉ */}
      <section id="hoc-van" className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <GraduationCap size={14} /> 02 · Học vấn &amp; Chứng chỉ
            </span>
            <h2 className="section-title">Nền tảng học thuật &amp; Chuẩn mực quốc tế</h2>
          </div>

          <div className="grid-2" style={{ marginBottom: 32 }}>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="card">
                <span className="tag" style={{ marginBottom: 12 }}>
                  {edu.period}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>{edu.degree}</h3>
                <div
                  style={{
                    fontWeight: 600,
                    color: 'var(--accent-terracotta)',
                    marginBottom: 10,
                    fontSize: '0.94rem',
                  }}
                >
                  {edu.institution}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{edu.note}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.35rem', marginBottom: 18 }}>Chứng chỉ chuyên môn</h3>
          <div className="grid-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.credentialId}
                className="card"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  padding: 22,
                }}
              >
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Award size={24} color="var(--accent-sage)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      {cert.issuer} · Cấp năm {cert.year}
                    </div>
                  </div>
                </div>
                <span className="tag tag--neutral">{cert.credentialId}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kỹ năng */}
      <section id="ky-nang" className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">03 · Kỹ năng chuyên môn</span>
            <h2 className="section-title">Năng lực cốt lõi &amp; Chuyên sâu</h2>
          </div>

          <div className="grid-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="card">
                <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>{group.category}</h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    marginBottom: 22,
                  }}
                >
                  {group.description}
                </p>

                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row__head">
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent-sage)', fontWeight: 600 }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar__fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Thành tựu */}
      <section id="thanh-tuu" className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <Trophy size={14} /> 04 · Thành tựu nổi bật
            </span>
            <h2 className="section-title">Những con số biết nói</h2>
            <p className="section-subtitle">
              Kết quả được tích lũy từ sự tin tưởng của học viên và các doanh nghiệp đối tác.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: 40 }}>
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--bg-dark-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 26,
                  border: '1px solid rgba(250, 248, 245, 0.12)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.3rem',
                    fontWeight: 700,
                    color: 'var(--accent-terracotta)',
                    marginBottom: 8,
                  }}
                >
                  {item.metric}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-on-dark-muted)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <button type="button" className="btn btn--accent" onClick={onOpenConsult}>
              Đăng ký tư vấn khóa học cùng Thục Hoa <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn btn--outline-light"
              onClick={() => onNavigate('/du-an')}
            >
              Xem các Dự án tiêu biểu
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
