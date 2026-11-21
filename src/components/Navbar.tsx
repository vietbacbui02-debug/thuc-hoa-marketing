import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { RoutePath } from '../data/siteData';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath, hash?: string) => void;
  onOpenConsult: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenConsult,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLink = (path: RoutePath, hash?: string) => {
    setMobileOpen(false);
    onNavigate(path, hash);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#/"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLink('/');
          }}
        >
          <div className="brand-orb">TH</div>
          <div>
            <div className="brand-logo__name">Thục Hoa</div>
            <div className="brand-logo__sub">Marketing · Academy</div>
          </div>
        </a>

        <nav className="nav-desktop" aria-label="Điều hướng chính">
          <button
            type="button"
            className={`nav-link ${currentPath === '/' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/')}
          >
            Trang chủ
          </button>

          <button
            type="button"
            className={`nav-link ${currentPath === '/gioi-thieu' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/gioi-thieu')}
          >
            Giới thiệu
          </button>

          <div className="nav-item">
            <button
              type="button"
              className={`nav-link ${currentPath === '/ho-so-nang-luc' ? 'nav-link--active' : ''}`}
              onClick={() => handleLink('/ho-so-nang-luc')}
            >
              Hồ sơ năng lực <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown" role="menu">
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/ho-so-nang-luc', 'kinh-nghiem')}
              >
                Kinh nghiệm
              </button>
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/ho-so-nang-luc', 'hoc-van')}
              >
                Học vấn &amp; Chứng chỉ
              </button>
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/ho-so-nang-luc', 'ky-nang')}
              >
                Kỹ năng
              </button>
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/ho-so-nang-luc', 'thanh-tuu')}
              >
                Thành tựu
              </button>
            </div>
          </div>

          <div className="nav-item">
            <button
              type="button"
              className={`nav-link ${
                currentPath === '/du-an' || currentPath === '/case-study'
                  ? 'nav-link--active'
                  : ''
              }`}
              onClick={() => handleLink('/du-an')}
            >
              Dự án tiêu biểu <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown" role="menu">
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/du-an')}
              >
                Tổng quan dự án
              </button>
              <button
                type="button"
                className="nav-dropdown__item"
                onClick={() => handleLink('/case-study')}
              >
                Case Study chi tiết
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`nav-link ${currentPath === '/an-pham' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/an-pham')}
          >
            Ấn phẩm
          </button>

          <button
            type="button"
            className={`nav-link ${currentPath === '/bai-viet' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/bai-viet')}
          >
            Bài viết
          </button>

          <button
            type="button"
            className={`nav-link ${currentPath === '/testimonials' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/testimonials')}
          >
            Testimonials
          </button>

          <button
            type="button"
            className={`nav-link ${currentPath === '/lien-he' ? 'nav-link--active' : ''}`}
            onClick={() => handleLink('/lien-he')}
          >
            Liên hệ
          </button>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => onOpenConsult()}
          >
            <Sparkles size={15} /> Tư vấn khóa học
          </button>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Mở menu điều hướng"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/')}
            >
              Trang chủ
            </button>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/gioi-thieu')}
            >
              Giới thiệu
            </button>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/ho-so-nang-luc')}
            >
              Hồ sơ năng lực
            </button>
            <div className="mobile-subnav">
              <button
                type="button"
                className="mobile-subnav__btn"
                onClick={() => handleLink('/ho-so-nang-luc', 'kinh-nghiem')}
              >
                Kinh nghiệm
              </button>
              <button
                type="button"
                className="mobile-subnav__btn"
                onClick={() => handleLink('/ho-so-nang-luc', 'hoc-van')}
              >
                Học vấn &amp; Chứng chỉ
              </button>
              <button
                type="button"
                className="mobile-subnav__btn"
                onClick={() => handleLink('/ho-so-nang-luc', 'ky-nang')}
              >
                Kỹ năng
              </button>
              <button
                type="button"
                className="mobile-subnav__btn"
                onClick={() => handleLink('/ho-so-nang-luc', 'thanh-tuu')}
              >
                Thành tựu
              </button>
            </div>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/du-an')}
            >
              Dự án tiêu biểu
            </button>
            <div className="mobile-subnav">
              <button
                type="button"
                className="mobile-subnav__btn"
                onClick={() => handleLink('/case-study')}
              >
                Case Study chi tiết
              </button>
            </div>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/an-pham')}
            >
              Ấn phẩm
            </button>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/bai-viet')}
            >
              Bài viết Marketing
            </button>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/testimonials')}
            >
              Testimonials
            </button>
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-btn"
              onClick={() => handleLink('/lien-he')}
            >
              Liên hệ
            </button>
          </div>

          <div style={{ marginTop: 16 }}>
            <button
              type="button"
              className="btn btn--accent"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileOpen(false);
                onOpenConsult();
              }}
            >
              <Sparkles size={16} /> Đăng ký tư vấn khóa học 1:1
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
