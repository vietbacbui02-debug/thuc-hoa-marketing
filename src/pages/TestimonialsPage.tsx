import React, { useState } from 'react';
import { MessageSquareQuote, Quote, ArrowRight } from 'lucide-react';
import { RoutePath, TESTIMONIALS } from '../data/siteData';

interface TestimonialsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenConsult: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenConsult,
}) => {
  const [filter, setFilter] = useState<'Tất cả' | 'Học viên khóa học' | 'Đối tác doanh nghiệp'>(
    'Tất cả'
  );

  const items =
    filter === 'Tất cả'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Testimonials</span>
          </div>
          <span className="eyebrow">
            <MessageSquareQuote size={14} /> Đánh giá thực tế
          </span>
          <h1 className="section-title">Cảm nhận từ Học viên &amp; Đối tác Doanh nghiệp</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Giá trị lớn nhất của việc giảng dạy và cố vấn là sự trưởng thành nghề nghiệp của học
            viên và tăng trưởng bền vững của khách hàng.
          </p>

          <div className="subnav-pills">
            {(['Tất cả', 'Học viên khóa học', 'Đối tác doanh nghiệp'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                className={`subnav-pill ${filter === tab ? 'subnav-pill--active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 48 }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 14,
                    }}
                  >
                    <Quote size={24} color="var(--accent-terracotta)" />
                    <span className="tag tag--neutral">{item.category}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      fontStyle: 'italic',
                      marginBottom: 20,
                    }}
                  >
                    “{item.quote}”
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 14 }}>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {item.role} · {item.organization}
                  </div>
                  <span className="tag tag--terracotta" style={{ marginTop: 10 }}>
                    {item.resultTag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="card"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 20,
              padding: 32,
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 6 }}>
                Bạn muốn tìm hiểu xem khóa học nào phù hợp với mình?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Đặt lịch trao đổi 1:1 miễn phí 20 phút cùng Thục Hoa ngay hôm nay.
              </p>
            </div>
            <button type="button" className="btn btn--accent" onClick={onOpenConsult}>
              Đăng ký tư vấn ngay <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
