import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Download } from 'lucide-react';
import { PUBLICATIONS, RoutePath } from '../data/siteData';

interface PublicationsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenConsult: () => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({
  onNavigate,
  onOpenConsult,
}) => {
  const [requestedId, setRequestedId] = useState<string | null>(null);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Ấn phẩm</span>
          </div>
          <span className="eyebrow">
            <BookOpen size={14} /> Ấn phẩm &amp; Bộ công cụ
          </span>
          <h1 className="section-title">Ebook, Playbook &amp; Tài liệu Marketing thực hành</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Những ấn phẩm do Thục Hoa biên soạn nhằm giúp học viên và doanh nghiệp chuẩn hóa tư duy
            và tiết kiệm hàng chục giờ tự mày mò.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'center', marginBottom: 56 }}>
            <div style={{ borderRadius: 22, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="./images/publication-flatlay.png"
                alt="Bộ ấn phẩm Marketing Thục Hoa"
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="tag tag--terracotta" style={{ marginBottom: 12 }}>
                Ấn phẩm nổi bật 2025–2026
              </span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                Học đi đôi với bộ khung thực hành chuẩn
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 22 }}>
                Tất cả ấn phẩm đều được đính kèm miễn phí cho học viên tham gia các khóa học chính
                thức, hoặc bạn có thể đăng ký nhận bản đọc thử ngay bên dưới.
              </p>
              <button type="button" className="btn btn--accent" onClick={onOpenConsult}>
                Nhận trọn bộ khi đăng ký khóa học
              </button>
            </div>
          </div>

          <div className="grid-3">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="card"
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
                    <span className="tag">{pub.type}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {pub.year}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.26rem', marginBottom: 8 }}>{pub.title}</h3>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--accent-terracotta)',
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    {pub.pages}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 16,
                    }}
                  >
                    {pub.description}
                  </p>
                  <ul
                    style={{
                      margin: '0 0 22px 0',
                      paddingLeft: 18,
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    {pub.takeaways.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                {requestedId === pub.id ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-sage-soft)',
                      color: 'var(--accent-sage)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={17} /> Đã gửi yêu cầu tải bản xem trước!
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn--outline btn--sm"
                    style={{ width: '100%' }}
                    onClick={() => setRequestedId(pub.id)}
                  >
                    <Download size={15} /> Nhận bản đọc thử (PDF)
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
