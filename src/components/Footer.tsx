import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { RoutePath, SITE_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenConsult: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsult }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}
              >
                {SITE_INFO.brandName}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-terracotta)',
                  marginTop: 4,
                }}
              >
                {SITE_INFO.tagline}
              </div>
            </div>
            <p
              style={{
                color: 'var(--text-on-dark-muted)',
                fontSize: '0.92rem',
                maxWidth: 320,
                marginBottom: 20,
              }}
            >
              Đồng hành cùng cá nhân và doanh nghiệp xây dựng tư duy Marketing bài bản,
              hệ thống nội dung có chiều sâu và chiến lược tăng trưởng đo lường được.
            </p>
            <button
              type="button"
              className="btn btn--accent btn--sm"
              onClick={onOpenConsult}
            >
              Đặt lịch tư vấn khóa học <ArrowUpRight size={15} />
            </button>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 14, color: '#fff' }}>
              Khám phá
            </h4>
            <button type="button" className="footer-link" onClick={() => onNavigate('/')}>
              Trang chủ
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/gioi-thieu')}
            >
              Giới thiệu bản thân
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/ho-so-nang-luc')}
            >
              Hồ sơ năng lực
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/du-an')}
            >
              Dự án tiêu biểu
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/case-study')}
            >
              Case Study chi tiết
            </button>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 14, color: '#fff' }}>
              Tri thức &amp; Kết nối
            </h4>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/an-pham')}
            >
              Ấn phẩm &amp; Tài liệu
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/bai-viet')}
            >
              Bài viết Marketing
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/testimonials')}
            >
              Cảm nhận học viên &amp; đối tác
            </button>
            <button
              type="button"
              className="footer-link"
              onClick={() => onNavigate('/lien-he')}
            >
              Liên hệ &amp; Đặt lịch
            </button>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: 14, color: '#fff' }}>
              Thông tin liên hệ
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                fontSize: '0.9rem',
                color: 'var(--text-on-dark-muted)',
              }}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Mail size={16} color="var(--accent-terracotta)" />
                <span>{SITE_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={16} color="var(--accent-terracotta)" />
                <span>{SITE_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin
                  size={16}
                  color="var(--accent-terracotta)"
                  style={{ flexShrink: 0, marginTop: 4 }}
                />
                <span>{SITE_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {SITE_INFO.brandName}. Thiết kế dành riêng cho hành trình phát triển Marketing.</span>
          <span>TP. Hồ Chí Minh · Việt Nam</span>
        </div>
      </div>
    </footer>
  );
};
