import React from 'react';
import { ArrowRight, Compass, HeartHandshake, Target } from 'lucide-react';
import { RoutePath, SITE_INFO } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenConsult: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsult }) => {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <span>/</span>
            <span>Giới thiệu</span>
          </div>
          <span className="eyebrow">Về {SITE_INFO.fullName}</span>
          <h1 className="section-title">
            Marketing tử tế bắt đầu từ sự thấu hiểu con người &amp; kỷ luật dữ liệu
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Hành trình hơn 8 năm làm nghề, học tập chuyên sâu và đào tạo thế hệ Marketer vững tư
            duy tại Việt Nam.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 52, alignItems: 'center' }}>
            <div className="hero-portrait-frame" style={{ maxWidth: 460 }}>
              <img
                src="./images/thuc-hoa-portrait.png"
                alt="Nguyễn Thục Hoa — Marketing Strategist"
              />
            </div>

            <div>
              <span className="eyebrow">Câu chuyện cá nhân</span>
              <h2 className="section-title" style={{ fontSize: '2.1rem' }}>
                Xin chào, tôi là Thục Hoa
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                }}
              >
                <p>
                  Tôi bắt đầu sự nghiệp Marketing tại một Digital Agency ở TP. Hồ Chí Minh — nơi rèn
                  luyện cho tôi tốc độ, khả năng chịu áp lực KPI và tư duy đa ngành từ Mỹ phẩm,
                  Giáo dục đến Bán lẻ.
                </p>
                <p>
                  Sau đó, khi đảm nhận vị trí <strong>Head of Brand &amp; Growth Marketing</strong>{' '}
                  tại doanh nghiệp bán lẻ với 14 cửa hàng, tôi có cơ hội nhìn Marketing ở góc độ
                  toàn diện hơn: không chỉ là lượt tiếp cận hay click, mà là biên lợi nhuận, dòng
                  tiền, tỷ lệ giữ chân khách hàng và sự đồng bộ của đội ngũ nội bộ.
                </p>
                <p>
                  Song song với công việc cố vấn, tôi hoàn thành chương trình{' '}
                  <strong>Thạc sĩ Quản trị Kinh doanh (MBA) chuyên ngành Marketing Chiến lược</strong>{' '}
                  tại Đại học Kinh tế TP.HCM (UEH). Tôi thành lập{' '}
                  <strong>Thục Hoa Marketing</strong> với mong muốn mang những kiến thức chuẩn mực
                  nhất kết hợp cùng kinh nghiệm thực chiến để giúp học viên tự tin làm nghề.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => onNavigate('/ho-so-nang-luc')}
                >
                  Xem Hồ sơ năng lực chi tiết <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  className="btn btn--accent"
                  onClick={onOpenConsult}
                >
                  Đặt lịch tư vấn khóa học
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Triết lý giảng dạy &amp; làm nghề</span>
            <h2 className="section-title">3 Nguyên tắc cốt lõi trong mọi khóa học</h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <Compass size={28} color="var(--accent-sage)" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>
                1. Tư duy gốc trước công cụ
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                Nền tảng quảng cáo và thuật toán thay đổi mỗi quý, nhưng tâm lý khách hàng, định vị
                thương hiệu và cấu trúc phễu giá trị là bất biến. Nắm chắc gốc rễ giúp bạn thích
                nghi mọi xu hướng.
              </p>
            </div>

            <div className="card">
              <Target size={28} color="var(--accent-terracotta)" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>
                2. Học gắn liền với dự án thật
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                Mỗi học viên đều thực hành trên chính sản phẩm của doanh nghiệp mình hoặc đề bài mô
                phỏng thực tế, có nhận xét chi tiết từng tuần thay vì chỉ nghe slide lý thuyết.
              </p>
            </div>

            <div className="card">
              <HeartHandshake size={28} color="var(--accent-sage)" style={{ marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 10 }}>
                3. Đồng hành sau tốt nghiệp
              </h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                Học viên được hỗ trợ review CV/Portfolio, định hướng phỏng vấn và tham gia cộng đồng
                cựu học viên để cập nhật các Case Study mới hàng tháng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
