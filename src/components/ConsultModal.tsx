import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { COURSES } from '../data/siteData';

interface ConsultModalProps {
  isOpen: boolean;
  initialCourseId?: string;
  onClose: () => void;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({
  isOpen,
  initialCourseId,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [courseId, setCourseId] = useState(initialCourseId || COURSES[0].id);
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialCourseId) {
      setCourseId(initialCourseId);
    }
  }, [initialCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setContact('');
    setGoal('');
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Đăng ký tư vấn khóa học"
      onClick={resetAndClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Đóng hộp thoại"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'var(--bg-secondary)',
            border: 'none',
            width: 36,
            height: 36,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <span className="eyebrow">Tư vấn 1:1 miễn phí (20 phút)</span>
            <h3 style={{ fontSize: '1.65rem', marginBottom: 8 }}>
              Chọn lộ trình khóa học phù hợp với bạn
            </h3>
            <p
              style={{
                fontSize: '0.93rem',
                color: 'var(--text-secondary)',
                marginBottom: 24,
              }}
            >
              Để lại thông tin bên dưới, Thục Hoa sẽ trực tiếp xem xét nền tảng hiện tại
              và gợi ý khóa học hoặc lộ trình tự học sát với mục tiêu nghề nghiệp của bạn.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">
                  Họ và tên *
                </label>
                <input
                  id="modal-name"
                  className="form-input"
                  required
                  placeholder="Ví dụ: Nguyễn Minh Anh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-contact">
                  Email hoặc Số điện thoại / Zalo *
                </label>
                <input
                  id="modal-contact"
                  className="form-input"
                  required
                  placeholder="090x xxx xxx hoặc email@domain.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-course">
                  Khóa học bạn đang quan tâm
                </label>
                <select
                  id="modal-course"
                  className="form-select"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                  <option value="need-advice">Chưa rõ — Cần Thục Hoa tư vấn thêm</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-goal">
                  Nền tảng hiện tại &amp; mục tiêu sau khóa học
                </label>
                <textarea
                  id="modal-goal"
                  className="form-textarea"
                  placeholder="Chia sẻ ngắn gọn về công việc hiện tại và điều bạn muốn đạt được trong 3–6 tháng tới..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn--accent"
                style={{ width: '100%' }}
              >
                Gửi yêu cầu tư vấn khóa học
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 8px' }}>
            <CheckCircle2
              size={52}
              color="var(--accent-sage)"
              style={{ margin: '0 auto 16px' }}
            />
            <h3 style={{ fontSize: '1.55rem', marginBottom: 10 }}>
              Đã ghi nhận đăng ký tư vấn!
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: 24,
                fontSize: '0.96rem',
              }}
            >
              Cảm ơn <strong>{name}</strong>. Thục Hoa sẽ phản hồi qua{' '}
              <strong>{contact}</strong> trong vòng 24 giờ làm việc kèm đề xuất khung giờ
              trao đổi 1:1 phù hợp.
            </p>
            <button type="button" className="btn btn--primary" onClick={resetAndClose}>
              Hoàn tất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
