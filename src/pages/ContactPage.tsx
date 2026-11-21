import React, { useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COURSES, RoutePath, SITE_INFO } from '../data/siteData';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(COURSES[0].id);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
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
            <span>Liên hệ</span>
          </div>
          <span className="eyebrow">Liên hệ &amp; Tư vấn khóa học</span>
          <h1 className="section-title">Kết nối với Thục Hoa Marketing</h1>
          <p className="section-subtitle" style={{ maxWidth: 720 }}>
            Đăng ký buổi tư vấn chọn khóa học 1:1, mời giảng dạy In-house cho doanh nghiệp hoặc
            trao đổi hợp tác chiến lược thương hiệu.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 44, alignItems: 'start' }}>
            {/* Form */}
            <div className="card" style={{ padding: 34 }}>
              {!sent ? (
                <>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: 8 }}>
                    Gửi yêu cầu tư vấn / hợp tác
                  </h2>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 24,
                    }}
                  >
                    Tôi luôn trực tiếp đọc và phản hồi trong vòng 24 giờ làm việc.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Họ và tên *
                      </label>
                      <input
                        id="contact-name"
                        className="form-input"
                        required
                        placeholder="Nhập họ và tên của bạn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="grid-2" style={{ gap: 14 }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className="form-input"
                          required
                          placeholder="ban@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">
                          Số điện thoại / Zalo *
                        </label>
                        <input
                          id="contact-phone"
                          className="form-input"
                          required
                          placeholder="090x xxx xxx"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-topic">
                        Nhu cầu quan tâm
                      </label>
                      <select
                        id="contact-topic"
                        className="form-select"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      >
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.id}>
                            Tư vấn khóa học: {c.title}
                          </option>
                        ))}
                        <option value="inhouse">Đào tạo Marketing In-house cho doanh nghiệp</option>
                        <option value="consulting">Cố vấn chiến lược thương hiệu / dự án</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">
                        Nội dung chi tiết
                      </label>
                      <textarea
                        id="contact-message"
                        className="form-textarea"
                        placeholder="Chia sẻ ngắn gọn về kinh nghiệm hiện tại, mục tiêu học tập hoặc bài toán doanh nghiệp của bạn..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn--accent" style={{ width: '100%' }}>
                      <Send size={16} /> Gửi thông tin liên hệ
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '28px 12px' }}>
                  <CheckCircle2
                    size={54}
                    color="var(--accent-sage)"
                    style={{ margin: '0 auto 16px' }}
                  />
                  <h3 style={{ fontSize: '1.55rem', marginBottom: 10 }}>
                    Cảm ơn {name} đã liên hệ!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
                    Thông tin của bạn đã được ghi nhận. Thục Hoa sẽ liên hệ lại qua{' '}
                    <strong>{phone}</strong> hoặc <strong>{email}</strong> trong thời gian sớm nhất.
                  </p>
                  <button
                    type="button"
                    className="btn btn--outline"
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                  >
                    Gửi một yêu cầu khác
                  </button>
                </div>
              )}
            </div>

            {/* Info + FAQ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="card">
                <h3 style={{ fontSize: '1.3rem', marginBottom: 18 }}>Kênh kết nối trực tiếp</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Mail size={18} color="var(--accent-terracotta)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                      <div style={{ fontWeight: 600 }}>{SITE_INFO.email}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Phone size={18} color="var(--accent-terracotta)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Hotline / Zalo
                      </div>
                      <div style={{ fontWeight: 600 }}>{SITE_INFO.phone}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <MapPin size={18} color="var(--accent-terracotta)" style={{ marginTop: 3 }} />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Địa điểm</div>
                      <div style={{ fontWeight: 600 }}>{SITE_INFO.location}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Clock size={18} color="var(--accent-terracotta)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Giờ làm việc
                      </div>
                      <div style={{ fontWeight: 600 }}>Thứ 2 – Thứ 7 · 09:00 – 18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 14 }}>
                  Câu hỏi thường gặp khi tư vấn khóa học
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.9rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>
                      Người trái ngành có học được không?
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Có. Khóa Marketing Foundation được thiết kế riêng cho người mới, bắt đầu từ
                      tư duy gốc đến thực hành làm đồ án hoàn chỉnh.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>
                      Buổi tư vấn 1:1 có mất phí không?
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Hoàn toàn miễn phí. Đây là buổi trao đổi 20 phút giúp bạn xác định rõ điểm
                      mạnh, lỗ hổng kiến thức và chọn đúng khóa học.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>
                      Học viên bận lịch đi làm có xem lại bài giảng được không?
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Lớp học diễn ra vào buổi tối (19:30–21:30) hoặc cuối tuần, toàn bộ video
                      record và tài liệu được lưu trữ trọn đời trên hệ thống học viên.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
