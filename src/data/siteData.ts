export type RoutePath =
  | '/'
  | '/gioi-thieu'
  | '/ho-so-nang-luc'
  | '/du-an'
  | '/case-study'
  | '/an-pham'
  | '/bai-viet'
  | '/testimonials'
  | '/lien-he';

export interface Course {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  level: string;
  audience: string;
  outcomes: string[];
  modules: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  note: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; level: number }[];
}

export interface AchievementItem {
  metric: string;
  title: string;
  description: string;
}

export interface CaseStudyProject {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  tags: string[];
  summary: string;
  impactHeadline: string;
  metrics: { label: string; value: string }[];
  context: string;
  challenge: string;
  strategy: string[];
  execution: string[];
  results: string[];
}

export interface Publication {
  id: string;
  type: string;
  title: string;
  year: string;
  pages: string;
  description: string;
  takeaways: string[];
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: { heading: string; paragraphs: string[] }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: 'Học viên khóa học' | 'Đối tác doanh nghiệp';
  quote: string;
  resultTag: string;
}

export const SITE_INFO = {
  brandName: 'Thục Hoa Marketing',
  tagline: 'Chiến lược Thương hiệu & Đào tạo Thực chiến',
  fullName: 'Nguyễn Thục Hoa',
  title: 'Marketing Strategist · Giảng viên & Cố vấn Khóa học',
  email: 'lienhe@thuchoa.marketing',
  phone: '0908 682 419',
  location: 'TP. Hồ Chí Minh · Đào tạo Online & Offline toàn quốc',
  heroHeadline: 'Biến tư duy Marketing thành tăng trưởng bền vững & sự nghiệp vững vàng',
  heroSubheadline:
    'Tôi là Thục Hoa — chuyên gia chiến lược thương hiệu với hơn 8 năm kinh nghiệm thực chiến. Website này là nơi tôi chia sẻ hồ sơ năng lực, các dự án đã triển khai và đồng hành tư vấn lộ trình khóa học Marketing phù hợp nhất với bạn.',
};

export const COURSES: Course[] = [
  {
    id: 'marketing-foundation',
    badge: 'Nền tảng chiến lược',
    title: 'Marketing Foundation & Brand Thinking',
    subtitle: 'Xây nền tư duy Marketing bài bản từ STP, 4P/7P đến lập kế hoạch truyền thông tổng thể.',
    duration: '6 tuần · 12 buổi thực hành',
    format: 'Online Live Zoom + Workshop 1:1',
    level: 'Người mới bắt đầu / Chuyển ngành',
    audience: 'Sinh viên năm cuối, nhân sự trái ngành, chủ shop muốn hiểu đúng bản chất Marketing.',
    outcomes: [
      'Đọc vị chân dung khách hàng (Customer Insight) và thiết kế Value Proposition sắc bén',
      'Tự tay xây dựng Bản kế hoạch Marketing 1 quý cho sản phẩm/dịch vụ thật',
      'Hiểu rõ vai trò của từng kênh (Owned, Earned, Paid) để không đốt ngân sách cảm tính',
    ],
    modules: [
      'Tuần 1–2: Tư duy thị trường, Nghiên cứu khách hàng & Định vị thương hiệu',
      'Tuần 3–4: Kiến trúc thông điệp, Content Pillar & Phễu chuyển đổi',
      'Tuần 5–6: Lập kế hoạch chiến dịch, Ngân sách & Bảo vệ đồ án tốt nghiệp 1:1',
    ],
  },
  {
    id: 'content-brand-storytelling',
    badge: 'Được quan tâm nhất',
    title: 'Brand Storytelling & Hệ thống Content Đa kênh',
    subtitle: 'Làm chủ nghệ thuật kể chuyện thương hiệu và xây dựng cỗ máy nội dung tạo chuyển đổi tự nhiên.',
    duration: '8 tuần · 16 buổi + Chấm bài chi tiết',
    format: 'Hybrid (TP.HCM) hoặc Online tương tác',
    level: 'Junior – Senior Content / Brand Executive',
    audience: 'Content Creator, Marketer muốn nâng cấp từ viết bài đơn lẻ lên tư duy hệ thống.',
    outcomes: [
      'Thiết kế Brand Voice & Editorial Guideline nhất quán cho doanh nghiệp',
      'Viết nội dung chạm insight trên đa nền tảng: Facebook, TikTok, LinkedIn, Email & Landing Page',
      'Đo lường hiệu quả nội dung bằng dữ liệu thực tế thay vì chỉ đếm lượt thích',
    ],
    modules: [
      'Tuần 1–2: Brand Archetype, Tone of Voice & Bản đồ Insight',
      'Tuần 3–5: Copywriting chuyển đổi, Storytelling & Kịch bản Video ngắn',
      'Tuần 6–8: Hệ thống hóa Content Calendar & Tối ưu SEO/Conversion',
    ],
  },
  {
    id: 'growth-performance-mentoring',
    badge: 'Coaching chuyên sâu',
    title: 'Performance Marketing & Growth Lab (1:1 / Nhóm nhỏ)',
    subtitle: 'Tối ưu phễu doanh thu, đọc chỉ số CAC/LTV/ROAS và vận hành chiến dịch tăng trưởng thực tế.',
    duration: '10 tuần · Coaching trực tiếp trên dự án thật',
    format: 'Mentor nhóm nhỏ tối đa 10 học viên',
    level: 'Leader / Founder / Performance Marketer',
    audience: 'Marketing Leader, Founder SME muốn tự kiểm soát hiệu quả quảng cáo và phễu bán hàng.',
    outcomes: [
      'Thiết lập hệ thống đo lường GA4, Meta Pixel, CRM và Dashboard theo dõi ROAS thực',
      'Cấu trúc chiến dịch Meta/Google/TikTok Ads theo từng tầng phễu Awareness → Conversion',
      'Giải quyết bài toán tăng trưởng doanh thu cụ thể của chính doanh nghiệp học viên',
    ],
    modules: [
      'Tuần 1–3: Unit Economics, Tracking chuẩn & Audit phễu hiện tại',
      'Tuần 4–7: Tối ưu Creative Testing, Landing Page & Tỷ lệ chuyển đổi (CRO)',
      'Tuần 8–10: Scaling ngân sách an toàn & Retention Marketing',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 — Hiện tại',
    role: 'Founder & Lead Marketing Strategist / Giảng viên',
    company: 'Thục Hoa Marketing Studio & Academy',
    location: 'TP. Hồ Chí Minh',
    summary:
      'Cố vấn chiến lược tăng trưởng cho các doanh nghiệp SME & thương hiệu tiêu dùng, đồng thời trực tiếp thiết kế và giảng dạy các chương trình đào tạo Marketing thực chiến.',
    highlights: [
      'Cố vấn thành công 24+ dự án tái định vị thương hiệu và tăng trưởng doanh thu đa kênh',
      'Đào tạo hơn 1.200 học viên qua các khóa học chuyên sâu và chương trình In-house cho doanh nghiệp',
      'Xây dựng bộ khung quy trình Marketing (Marketing OS) áp dụng thực tế cho đội ngũ 5–20 nhân sự',
    ],
  },
  {
    period: '2020 — 2023',
    role: 'Head of Brand & Growth Marketing',
    company: 'Lumina Lifestyle Group (F&B & Retail)',
    location: 'TP. Hồ Chí Minh',
    summary:
      'Chịu trách nhiệm toàn bộ chiến lược thương hiệu, truyền thông tích hợp (IMC) và tăng trưởng thương mại điện tử cho chuỗi 14 cửa hàng và kênh D2C.',
    highlights: [
      'Tăng trưởng doanh thu kênh D2C đạt +185% sau 18 tháng nhờ tối ưu phễu nội dung và CRM',
      'Giảm 32% chi phí thu hút khách hàng mới (CAC) thông qua chiến lược Referral & Community',
      'Điều phối đội ngũ 15 nhân sự gồm Brand, Content, Performance và Design',
    ],
  },
  {
    period: '2018 — 2020',
    role: 'Senior Marketing Specialist',
    company: 'VinaCommerce Digital Agency',
    location: 'TP. Hồ Chí Minh',
    summary:
      'Lập kế hoạch và triển khai chiến dịch Digital Marketing cho các nhãn hàng ngành Mỹ phẩm, Giáo dục và Công nghệ.',
    highlights: [
      'Quản lý ngân sách truyền thông trung bình 1.5 – 3 tỷ VNĐ/chiến dịch với ROAS mục tiêu luôn đạt > 4.2x',
      'Đạt giải thưởng nội bộ Best Integrated Campaign năm 2019 cho chiến dịch ra mắt dòng sản phẩm mới',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2021 — 2023',
    degree: 'Thạc sĩ Quản trị Kinh doanh (MBA) — Chuyên ngành Marketing Chiến lược',
    institution: 'Đại học Kinh tế TP. Hồ Chí Minh (UEH)',
    note: 'Luận văn xuất sắc về Hành vi tiêu dùng đa kênh (Omnichannel Consumer Behavior) tại Việt Nam.',
  },
  {
    period: '2014 — 2018',
    degree: 'Cử nhân Truyền thông & Marketing Quốc tế (Loại Giỏi)',
    institution: 'Đại học RMIT Việt Nam / Chương trình Liên kết Quốc tế',
    note: 'Học bổng thành tích học tập xuất sắc 2 năm liên tiếp; Chủ nhiệm CLB Marketing.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Google Digital Marketing & E-commerce Professional',
    issuer: 'Google Career Certificates',
    year: '2024',
    credentialId: 'GDM-2024-8841',
  },
  {
    name: 'Meta Certified Media Planning Professional',
    issuer: 'Meta Blueprint',
    year: '2023',
    credentialId: 'META-MP-5920',
  },
  {
    name: 'HubSpot Inbound Marketing & Content Strategy',
    issuer: 'HubSpot Academy',
    year: '2023',
    credentialId: 'HS-IM-4012',
  },
  {
    name: 'Google Analytics 4 (GA4) Individual Qualification',
    issuer: 'Google Skillshop',
    year: '2024',
    credentialId: 'GA4-IQ-9371',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Chiến lược Thương hiệu & Thị trường',
    description: 'Nghiên cứu thị trường, định vị, kiến trúc thương hiệu và lập kế hoạch IMC.',
    skills: [
      { name: 'Brand Positioning & Strategy', level: 95 },
      { name: 'Customer Insight & Research', level: 92 },
      { name: 'Integrated Marketing Plan (IMC)', level: 94 },
    ],
  },
  {
    category: 'Tăng trưởng & Hiệu suất (Growth)',
    description: 'Phễu chuyển đổi, tối ưu ngân sách quảng cáo và phân tích dữ liệu.',
    skills: [
      { name: 'Full-Funnel Performance Ads', level: 90 },
      { name: 'GA4, Tracking & Attribution', level: 88 },
      { name: 'CRO & Retention (CRM/Email)', level: 89 },
    ],
  },
  {
    category: 'Nội dung & Đào tạo',
    description: 'Xây dựng hệ thống nội dung, giảng dạy và cố vấn đội ngũ.',
    skills: [
      { name: 'Brand Storytelling & Copywriting', level: 96 },
      { name: 'Curriculum Design & Teaching', level: 95 },
      { name: 'Leadership & Team Mentoring', level: 91 },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: '1.200+',
    title: 'Học viên đã đào tạo',
    description: 'Từ sinh viên, chuyên viên Marketing đến Founder SME trên toàn quốc.',
  },
  {
    metric: '24+',
    title: 'Doanh nghiệp cố vấn',
    description: 'Trực tiếp đồng hành tái cấu trúc chiến lược thương hiệu và tăng trưởng doanh thu.',
  },
  {
    metric: '4.9/5',
    title: 'Điểm hài lòng khóa học',
    description: 'Đánh giá ẩn danh từ học viên sau khi hoàn thành và áp dụng kiến thức vào công việc.',
  },
  {
    metric: '3.8x',
    title: 'ROAS trung bình dự án',
    description: 'Hiệu quả hoàn vốn quảng cáo trung bình trên các chiến dịch Performance trọng điểm.',
  },
];

export const PROJECTS: CaseStudyProject[] = [
  {
    slug: 'tai-dinh-vi-thuong-hieu-my-pham-thien-nhien-an-nhien',
    title: 'Tái định vị & Tăng trưởng D2C cho Mỹ phẩm Thiên nhiên An Nhiên',
    client: 'An Nhiên Botanicals',
    industry: 'Mỹ phẩm & Chăm sóc cá nhân',
    year: '2025',
    tags: ['Brand Strategy', 'Content System', 'Performance'],
    summary:
      'Chuyển dịch thương hiệu từ bán hàng phụ thuộc sàn TMĐT sang mô hình D2C bền vững với tệp khách hàng trung thành cao.',
    impactHeadline: '+210% Doanh thu D2C sau 6 tháng',
    metrics: [
      { label: 'Tăng trưởng D2C', value: '+210%' },
      { label: 'Giảm CAC', value: '-28%' },
      { label: 'Tỷ lệ mua lại', value: '42%' },
    ],
    context:
      'An Nhiên Botanicals có chất lượng sản phẩm tốt nhưng phụ thuộc 85% doanh thu vào các đợt giảm giá trên sàn TMĐT, biên lợi nhuận ngày càng mỏng và thương hiệu chưa có dấu ấn riêng.',
    challenge:
      'Làm sao nâng giá trị cảm nhận của thương hiệu Việt, thuyết phục khách hàng mua trực tiếp trên website với giá niêm yết và quay lại định kỳ.',
    strategy: [
      'Tái định vị thông điệp cốt lõi: "Chăm da chậm rãi — Thuần khiết từ thảo mộc bản địa".',
      'Xây dựng 3 Content Pillar giáo dục làn da kết hợp Storytelling về nguồn nguyên liệu.',
      'Thiết kế phễu Quiz chẩn đoán da trên Landing Page để thu thập dữ liệu First-party và cá nhân hóa gợi ý.',
    ],
    execution: [
      'Chuẩn hóa lại Bộ nhận diện ngôn từ (Brand Voice) và hình ảnh trên Website, Fanpage, TikTok.',
      'Triển khai chuỗi video ngắn 45s giải đáp vấn đề da cùng chuyên gia, chạy Meta Ads theo phễu 3 tầng.',
      'Thiết lập luồng chăm sóc tự động qua Email/Zalo OA nhắc lịch chăm sóc da sau 21 ngày mua hàng.',
    ],
    results: [
      'Doanh thu kênh D2C tăng 210% sau 6 tháng triển khai liên tục.',
      'Chi phí thu hút khách hàng mới (CAC) giảm 28% nhờ tệp nội dung tự nhiên và Quiz thu lead.',
      'Tỷ lệ khách hàng quay lại mua lần 2 trong 90 ngày đạt 42% (tăng từ mức 18% ban đầu).',
    ],
  },
  {
    slug: 'chien-dich-ra-mat-nen-tang-edtech-skillbridge',
    title: 'Chiến dịch Ra mắt & Phễu Tuyển sinh cho Nền tảng EdTech SkillBridge',
    client: 'SkillBridge Vietnam',
    industry: 'Giáo dục trực tuyến (EdTech)',
    year: '2024',
    tags: ['Launch Campaign', 'Lead Generation', 'CRO'],
    summary:
      'Thiết kế chiến dịch Go-to-Market 90 ngày giúp nền tảng học kỹ năng nghề nghiệp đạt mốc 3.500 học viên trả phí đầu tiên.',
    impactHeadline: '3.500+ Học viên trả phí trong 90 ngày',
    metrics: [
      { label: 'Học viên trả phí', value: '3.540' },
      { label: 'Conversion Rate LP', value: '6.8%' },
      { label: 'ROAS chiến dịch', value: '4.6x' },
    ],
    context:
      'SkillBridge là startup EdTech mới gia nhập thị trường với ngân sách truyền thông vừa phải, cần tạo độ tin cậy nhanh chóng trước nhiều đối thủ lâu năm.',
    challenge:
      'Chi phí quảng cáo ngành giáo dục cao; người học e ngại chất lượng khóa học mới chưa có nhiều đánh giá.',
    strategy: [
      'Sử dụng chiến lược "Trải nghiệm trước — Đăng ký sau" thông qua chuỗi Masterclass miễn phí cuối tuần.',
      'Kết hợp Micro-KOLs trong ngành chuyên môn để tạo bằng chứng xã hội (Social Proof) chân thực.',
      'Tối ưu hóa Landing Page theo cấu trúc giải quyết rào cản tâm lý người học.',
    ],
    execution: [
      'Xây dựng bộ tài liệu Ebook định hướng nghề nghiệp làm Lead Magnet thu hút 18.000 lượt tải.',
      'Chạy quảng cáo đa kênh Google Search + Meta Retargeting bám sát hành trình cân nhắc 14 ngày.',
      'Đào tạo đội ngũ tư vấn tuyển sinh theo kịch bản tư vấn dựa trên nhu cầu (Consultative Selling).',
    ],
    results: [
      'Đạt 3.540 học viên trả phí ngay trong quý ra mắt đầu tiên.',
      'Tỷ lệ chuyển đổi trên Landing Page đạt 6.8%, vượt 1.9 lần mức trung bình ngành.',
      'ROAS toàn chiến dịch đạt 4.6x, tạo nền tảng tăng trưởng ổn định cho các quý tiếp theo.',
    ],
  },
  {
    slug: 'he-thong-marketing-in-house-chuoi-ca-phe-ban-dia',
    title: 'Chuẩn hóa Hệ thống Marketing & Đào tạo In-house cho Chuỗi Cà phê Bản Địa',
    client: 'Mộc Miên Coffee & Roastery',
    industry: 'F&B / Chuỗi bán lẻ',
    year: '2024',
    tags: ['In-house Training', 'Local Marketing', 'CRM'],
    summary:
      'Đào tạo đội ngũ 8 nhân sự Marketing nội bộ và xây dựng quy trình vận hành chiến dịch theo mùa vụ cho chuỗi 9 cửa hàng.',
    impactHeadline: '+45% Khách hàng thành viên quay lại',
    metrics: [
      { label: 'Repeat Customers', value: '+45%' },
      { label: 'Doanh thu cửa hàng', value: '+34%' },
      { label: 'Thời gian sản xuất', value: '-40%' },
    ],
    context:
      'Đội ngũ Marketing nội bộ của chuỗi hoạt động rời rạc, thiếu quy trình lập kế hoạch tháng và phụ thuộc vào các ý tưởng ngẫu hứng.',
    challenge:
      'Nâng cao năng lực tự chủ của đội ngũ trong 8 tuần mà không làm gián đoạn lịch vận hành hàng ngày.',
    strategy: [
      'Thiết kế chương trình Coaching In-house kết hợp 30% lý thuyết và 70% giải quyết chiến dịch thật.',
      'Chuẩn hóa bộ Template từ Brief, Content Calendar đến báo cáo hiệu quả hàng tuần.',
    ],
    execution: [
      'Tổ chức 8 buổi workshop chuyên đề dành riêng cho team Brand, Content và Store Marketing.',
      'Triển khai chương trình Membership tích điểm gắn với các câu chuyện hạt cà phê theo vùng miền.',
    ],
    results: [
      'Tỷ lệ khách hàng thành viên quay lại tăng 45% sau 1 quý.',
      'Doanh thu trung bình mỗi cửa hàng tăng 34% trong mùa cao điểm.',
      'Thời gian lên kế hoạch và phê duyệt nội dung giảm 40% nhờ quy trình chuẩn.',
    ],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'playbook-marketing-2026',
    type: 'Ebook & Playbook',
    title: 'Cẩm nang Chiến lược Marketing Cho Doanh Nghiệp Tinh Gọn',
    year: '2025',
    pages: '148 trang · PDF & Notion Template',
    description:
      'Tổng hợp hệ thống tư duy từ nghiên cứu khách hàng, định vị khác biệt đến thiết lập phễu tăng trưởng ít lãng phí ngân sách nhất.',
    takeaways: [
      '12 mẫu bảng tính lập kế hoạch ngân sách & KPI',
      'Khung phân tích Insight 4 lớp áp dụng cho mọi ngành hàng',
      'Checklist 25 điểm kiểm tra trước khi chạy chiến dịch Paid Ads',
    ],
  },
  {
    id: 'content-architecture-kit',
    type: 'Framework Kit',
    title: 'Bộ Khung Kiến Trúc Nội Dung Đa Kênh (Content OS)',
    year: '2024',
    pages: '64 trang · Kèm 30+ Prompt & Template',
    description:
      'Hướng dẫn cách biến một ý tưởng lớn thành 15 định dạng nội dung nhất quán trên Facebook, TikTok, LinkedIn và Email.',
    takeaways: [
      'Ma trận Content Pillar 4 trụ cột bền vững',
      'Thư viện 40+ công thức mở đầu (Hook) giữ chân người đọc',
      'Mẫu lịch biên tập (Editorial Calendar) dùng ngay trên Notion',
    ],
  },
  {
    id: 'career-roadmap-marketer',
    type: 'Tài liệu hướng nghiệp',
    title: 'Lộ trình Phát triển Sự nghiệp Marketer từ 0 đến Leader',
    year: '2024',
    pages: '52 trang · Tài liệu tặng học viên',
    description:
      'Bản đồ kỹ năng, bộ câu hỏi phỏng vấn thực tế và cách xây dựng Portfolio Marketing thuyết phục nhà tuyển dụng.',
    takeaways: [
      'Khung năng lực chi tiết cho từng cấp bậc Intern → Manager',
      'Cách viết Case Study trong Portfolio khi chưa có nhiều dự án lớn',
      'Danh sách nguồn học và chứng chỉ quốc tế uy tín nên ưu tiên',
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: 'dung-chay-quang-cao-khi-chua-ro-dinh-vi',
    category: 'Chiến lược',
    title: 'Đừng vội chạy quảng cáo khi bạn chưa trả lời được 3 câu hỏi định vị này',
    date: '14/11/2026',
    readTime: '6 phút đọc',
    excerpt:
      'Phần lớn ngân sách Marketing bị lãng phí không phải vì thuật toán thay đổi, mà vì thông điệp chưa đủ sắc để khiến đúng người dừng lại.',
    content: [
      {
        heading: '1. Sai lầm phổ biến: Coi quảng cáo là liều thuốc chữa bách bệnh',
        paragraphs: [
          'Nhiều chủ doanh nghiệp và marketer trẻ thường bắt đầu bằng câu hỏi: "Nên chạy TikTok Ads hay Facebook Ads?" trước khi tự hỏi khách hàng thực sự cần gì ở mình. Quảng cáo bản chất là bộ khuếch đại: nếu thông điệp mờ nhạt, quảng cáo chỉ giúp bạn đưa sự mờ nhạt đó đến nhiều người hơn với chi phí đắt đỏ hơn.',
        ],
      },
      {
        heading: '2. Ba câu hỏi kiểm tra trước khi bấm nút chi tiền',
        paragraphs: [
          'Thứ nhất: Chúng ta giải quyết nỗi đau cụ thể nào mà đối thủ đang bỏ ngỏ? Thứ hai: Tại sao khách hàng phải tin lời hứa đó ngay lúc này (Reason to Believe)? Thứ ba: Hành động tiếp theo sau khi họ xem xong mẫu tin là gì — mua ngay, nhắn tin tư vấn hay nhận một tài liệu giá trị?',
          'Khi ba câu hỏi này được trả lời rõ ràng trên một trang giấy A4, tỷ lệ chuyển đổi (Conversion Rate) thường cải thiện rõ rệt trước cả khi bạn tối ưu kỹ thuật target.',
        ],
      },
    ],
  },
  {
    slug: 'xay-dung-thuong-hieu-ca-nhan-ben-vung-cho-chuyen-gia',
    category: 'Thương hiệu cá nhân',
    title: 'Xây dựng thương hiệu cá nhân: Sự nhất quán quan trọng hơn độ viral',
    date: '02/11/2026',
    readTime: '5 phút đọc',
    excerpt:
      'Một video triệu view nhưng lệch tệp không mang lại giá trị bằng 1.000 người đọc đúng chuyên môn và tin tưởng bạn suốt nhiều năm.',
    content: [
      {
        heading: '1. Viral là phần thưởng phụ, không phải mục tiêu chính',
        paragraphs: [
          'Trong kỷ nguyên nội dung ngắn, rất dễ bị cuốn vào cuộc đua lượt xem. Tuy nhiên, nếu bạn làm chuyên môn, giảng dạy hoặc tư vấn B2B, giá trị thực sự nằm ở mức độ tin cậy (Trust Equity) mà bạn tích lũy được qua từng bài viết, từng chia sẻ có chiều sâu.',
        ],
      },
      {
        heading: '2. Công thức 3 vòng tròn cho thương hiệu cá nhân',
        paragraphs: [
          'Hãy giao thoa giữa: Điều bạn làm giỏi nhất (Chuyên môn), Điều thị trường đang trăn trở (Nhu cầu), và Giọng văn/Giá trị sống riêng của bạn (Bản sắc). Sự nhất quán trong 6–12 tháng sẽ tạo ra tài sản vô hình không đối thủ nào sao chép được.',
        ],
      },
    ],
  },
  {
    slug: 'doc-hieu-chi-so-cac-va-ltv-cho-nguoi-lam-content',
    category: 'Performance',
    title: 'Vì sao người làm Content & Brand cũng cần hiểu chỉ số CAC và LTV?',
    date: '20/10/2026',
    readTime: '7 phút đọc',
    excerpt:
      'Khi hiểu ngôn ngữ của dữ liệu kinh doanh, tiếng nói của người làm sáng tạo trong phòng họp chiến lược sẽ có sức nặng hoàn toàn khác.',
    content: [
      {
        heading: '1. Phá bỏ bức tường giữa Creative và Performance',
        paragraphs: [
          'Trong nhiều đội ngũ, team Content chỉ nhìn lượt tương tác còn team Performance chỉ nhìn chi phí trên mỗi đơn hàng. Khoảng cách này khiến chiến dịch thiếu tính liền mạch. Một bài viết hay không chỉ để khen đẹp, mà phải góp phần giảm chi phí thu hút khách hàng (CAC) hoặc kéo dài vòng đời khách hàng (LTV).',
        ],
      },
      {
        heading: '2. Ba thói quen giúp bạn làm việc thông minh hơn với số liệu',
        paragraphs: [
          'Hãy bắt đầu bằng việc xem báo cáo phễu mỗi tuần một lần, đặt câu hỏi "Nội dung nào mang lại khách hàng có giá trị đơn cao nhất?" và thử nghiệm A/B tiêu đề dựa trên giả thuyết rõ ràng.',
        ],
      },
    ],
  },
  {
    slug: 'bi-quyet-chon-khoa-hoc-marketing-phu-hop-giai-doan',
    category: 'Định hướng học tập',
    title: 'Chọn khóa học Marketing thế nào để không bị "ngộp" kiến thức và bỏ giữa chừng?',
    date: '08/10/2026',
    readTime: '5 phút đọc',
    excerpt:
      'Thay vì học dàn trải mọi công cụ mới nổi, hãy xác định đúng giai đoạn sự nghiệp của bạn để đầu tư thời gian hiệu quả.',
    content: [
      {
        heading: '1. Xác định điểm xuất phát của bản thân',
        paragraphs: [
          'Nếu bạn mới chuyển ngành, điều bạn cần nhất là bức tranh tổng thể và tư duy nền tảng (Foundation), không phải các mẹo chạy quảng cáo nâng cao. Ngược lại, nếu bạn đã đi làm 1–2 năm và muốn bứt phá lên vị trí Lead, bạn cần học cách hệ thống hóa dữ liệu và tối ưu phễu.',
        ],
      },
      {
        heading: '2. Tiêu chí chọn người hướng dẫn (Mentor)',
        paragraphs: [
          'Hãy xem giảng viên có trực tiếp làm dự án thực tế không, giáo trình có phần sửa bài 1:1 trên sản phẩm thật không, và cộng đồng học viên sau khóa học có tiếp tục được đồng hành hay không.',
        ],
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Minh Anh Trần',
    role: 'Brand Manager',
    organization: 'Sora Skincare',
    category: 'Học viên khóa học',
    quote:
      'Khóa Brand Storytelling & Content của chị Thục Hoa giúp mình thoát khỏi cảnh viết bài theo cảm hứng. Sau 8 tuần được chị sửa từng bài và hệ thống lại Content Pillar, lượng lead tự nhiên từ Fanpage của team mình tăng gấp đôi.',
    resultTag: 'x2 Lead tự nhiên sau khóa học',
  },
  {
    id: 't2',
    name: 'Hoàng Nam Lê',
    role: 'Founder & CEO',
    organization: 'An Nhiên Botanicals',
    category: 'Đối tác doanh nghiệp',
    quote:
      'Điều tôi trân trọng nhất ở Thục Hoa là sự thẳng thắn và tư duy số liệu sắc bén. Chị không vẽ ra những chiến dịch hào nhoáng tốn kém mà đi thẳng vào bài toán định vị và biên lợi nhuận, giúp kênh D2C của chúng tôi tăng trưởng 210%.',
    resultTag: '+210% Doanh thu D2C',
  },
  {
    id: 't3',
    name: 'Khánh Linh Phạm',
    role: 'Marketing Executive (Chuyển ngành từ Tài chính)',
    organization: 'TechVibe Studio',
    category: 'Học viên khóa học',
    quote:
      'Trước khi gặp chị Hoa mình rất mông lung vì học nhiều nguồn rời rạc. Nhờ buổi tư vấn lộ trình 1:1 và khóa Marketing Foundation, mình hoàn thành được Portfolio hoàn chỉnh và đậu vị trí Marketing Executive chỉ sau 3 tuần phỏng vấn.',
    resultTag: 'Chuyển ngành thành công sau 2 tháng',
  },
  {
    id: 't4',
    name: 'Đức Thịnh Nguyễn',
    role: 'Head of Growth',
    organization: 'SkillBridge Vietnam',
    category: 'Đối tác doanh nghiệp',
    quote:
      'Thục Hoa có khả năng kết nối rất tốt giữa tư duy chiến lược và thực thi chi tiết. Chiến dịch ra mắt 90 ngày do chị cố vấn không chỉ đạt mục tiêu 3.500 học viên mà còn để lại bộ quy trình vận hành chuẩn cho team nội bộ tiếp quản.',
    resultTag: 'ROAS 4.6x chiến dịch ra mắt',
  },
  {
    id: 't5',
    name: 'Thu Thảo Võ',
    role: 'Content Team Lead',
    organization: 'Mộc Miên Coffee',
    category: 'Học viên khóa học',
    quote:
      'Chương trình đào tạo In-house của chị Hoa rất thực tế: học đến đâu áp dụng ngay vào chiến dịch tháng tới của chuỗi đến đó. Cả team tự tin hơn hẳn khi đứng trước ban giám đốc trình bày kế hoạch có số liệu chứng minh.',
    resultTag: 'Giảm 40% thời gian lập kế hoạch',
  },
  {
    id: 't6',
    name: 'Gia Huy Đặng',
    role: 'Chủ thương hiệu thời trang',
    organization: 'Huy Studio',
    category: 'Học viên khóa học',
    quote:
      'Tham gia lớp Performance & Growth Lab giúp mình hiểu rõ bản chất CAC và LTV, không còn phụ thuộc hoàn toàn vào agency bên ngoài. Mình đã tự kiểm soát được ngân sách ads và tăng tỷ lệ khách quay lại rõ rệt.',
    resultTag: 'Tối ưu 30% ngân sách Ads',
  },
];
