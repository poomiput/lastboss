// Mock data layer for the logistics career-matching mockup.
// Everything here is static fixture data — no backend/API involved.

export const LEVELS = [
  { code: 'L1', title: 'Warehouse Associate', track: 'คลังสินค้า (Warehouse)' },
  { code: 'L2', title: 'Senior Warehouse Associate', track: 'คลังสินค้า (Warehouse)' },
  { code: 'L3', title: 'Warehouse Team Lead', track: 'คลังสินค้า (Warehouse)' },
  { code: 'L4', title: 'Warehouse Supervisor', track: 'คลังสินค้า (Warehouse)' },
  { code: 'L5', title: 'Logistics Coordinator', track: 'โลจิสติกส์ (Logistics)' },
  { code: 'L6', title: 'Logistics Manager', track: 'โลจิสติกส์ (Logistics)' },
  { code: 'L7', title: 'Regional Logistics Manager', track: 'ปฏิบัติการ (Operations)' },
  { code: 'L8', title: 'Director of Supply Chain', track: 'ปฏิบัติการ (Operations)' },
  { code: 'L9', title: 'VP of Operations', track: 'บริหาร (Management)' },
  { code: 'L10', title: 'Chief Operations Officer', track: 'บริหารระดับสูง (Executive)' },
];

export function getLevelByCode(code) {
  return LEVELS.find((l) => l.code === code);
}

export function getNextLevel(code) {
  const idx = LEVELS.findIndex((l) => l.code === code);
  if (idx === -1 || idx === LEVELS.length - 1) return null;
  return LEVELS[idx + 1];
}

export const EMPLOYEE = {
  id: 'emp-2201',
  name: 'ธนกร วัฒนากูล',
  nameEn: 'Thanakorn Wattanakul',
  avatarInitials: 'TW',
  levelCode: 'L9',
  department: 'Operations',
  division: 'Supply Chain & Logistics',
  location: 'ศูนย์กระจายสินค้าบางนา, กรุงเทพฯ',
  email: 'thanakorn.w@logisco.example.com',
  tenureYears: 8,
  managerName: 'ปวีณา ไชยเจริญ',
  managerTitle: 'Chief Operations Officer (L10)',
  bio: 'ดูแลภาพรวมการปฏิบัติการคลังสินค้าและโลจิสติกส์ทั่วประเทศ 12 ศูนย์กระจายสินค้า มุ่งเน้นการปรับปรุงประสิทธิภาพต้นทุนและ Digital Transformation ของห่วงโซ่อุปทาน',
  // Development tracks required to fully "own" the current level (L9).
  // Progress bar on the profile page = tracksCompleted / tracksRequired.
  tracks: [
    { id: 'trk-1', title: 'Strategic Leadership Track', status: 'completed' },
    { id: 'trk-2', title: 'Operations Excellence Track', status: 'completed' },
    { id: 'trk-3', title: 'Executive Financial Acumen', status: 'completed' },
    { id: 'trk-4', title: 'Digital Supply Chain Transformation', status: 'in-progress' },
    { id: 'trk-5', title: 'Cross-Functional Stakeholder Management', status: 'not-started' },
    { id: 'trk-6', title: 'Crisis & Risk Management', status: 'not-started' },
  ],
  // Self-assessed / 360-reviewed proficiency (0-100) per competency.
  skills: [
    { name: 'Enterprise Strategic Planning', level: 62 },
    { name: 'P&L Ownership at Scale', level: 58 },
    { name: 'Global Network Design', level: 45 },
    { name: 'Board & Stakeholder Communication', level: 50 },
    { name: 'Change Leadership', level: 68 },
    { name: 'Executive Negotiation', level: 55 },
    { name: 'Operations Excellence', level: 88 },
    { name: 'Team Leadership', level: 90 },
  ],
};

export function tracksProgress(employee = EMPLOYEE) {
  const total = employee.tracks.length;
  const completed = employee.tracks.filter((t) => t.status === 'completed').length;
  const inProgress = employee.tracks.filter((t) => t.status === 'in-progress').length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, inProgress, percent };
}

// Competencies required to be ready for promotion into L10.
export const L10_REQUIREMENTS = [
  { name: 'Enterprise Strategic Planning', level: 85 },
  { name: 'P&L Ownership at Scale', level: 85 },
  { name: 'Global Network Design', level: 80 },
  { name: 'Board & Stakeholder Communication', level: 85 },
  { name: 'Change Leadership', level: 80 },
  { name: 'Executive Negotiation', level: 80 },
];

export const TAG_COLORS = {
  leadership: 'purple',
  strategy: 'orange',
  digital: 'blue',
  operations: 'pink',
};

export const CATEGORY_LABELS = {
  leadership: 'Leadership & People',
  strategy: 'Strategy & Finance',
  digital: 'Digital & Data',
  operations: 'Operations Excellence',
};

export const COURSES = [
  {
    id: 'enterprise-strategic-foresight',
    title: 'Enterprise Strategic Foresight',
    category: 'leadership',
    targetLevel: 'L10',
    duration: '6 สัปดาห์ · 4 ชม./สัปดาห์',
    format: 'Cohort-based · Live Workshop',
    instructor: 'ดร. อภิรดี สุขเกษม, Former CSCO',
    description:
      'เรียนรู้กรอบการวางแผนกลยุทธ์ระดับองค์กรสำหรับผู้บริหารสายปฏิบัติการ เพื่อเตรียมพร้อมสำหรับบทบาทระดับ C-Level',
    longDescription:
      'คอร์สนี้ออกแบบมาเพื่อผู้บริหารระดับ VP ที่กำลังเตรียมความพร้อมสู่ตำแหน่ง C-Level โดยเน้นการฝึกวางแผนกลยุทธ์ระยะยาว การวิเคราะห์แนวโน้มอุตสาหกรรมโลจิสติกส์ระดับโลก และการแปลงกลยุทธ์องค์กรให้เป็นแผนปฏิบัติการของฝ่ายปฏิบัติการ',
    skillsCovered: ['Enterprise Strategic Planning', 'Change Leadership'],
    status: 'in-progress',
    progress: 40,
    modules: [
      { id: 'm1', title: 'Industry Foresight & Scenario Planning', duration: '90 นาที', completed: true },
      { id: 'm2', title: 'From Strategy to Execution Roadmap', duration: '90 นาที', completed: true },
      { id: 'm3', title: 'Capital Allocation & Long-Range Planning', duration: '120 นาที', completed: false },
      { id: 'm4', title: 'Leading Through Disruption', duration: '90 นาที', completed: false },
      { id: 'm5', title: 'Capstone: 3-Year Network Strategy', duration: '150 นาที', completed: false },
    ],
  },
  {
    id: 'pnl-ownership-executive',
    title: 'P&L Ownership for Operations Executives',
    category: 'strategy',
    targetLevel: 'L10',
    duration: '5 สัปดาห์ · 3 ชม./สัปดาห์',
    format: 'Self-paced + 2 Live Q&A',
    instructor: 'ทีมการเงินองค์กร (Corporate Finance)',
    description:
      'ฝึกอ่านและบริหารงบกำไรขาดทุนระดับองค์กร การตัดสินใจลงทุน และการสื่อสารตัวเลขกับคณะกรรมการบริหาร',
    longDescription:
      'เจาะลึกการบริหาร P&L ในระดับที่ครอบคลุมหลายศูนย์กระจายสินค้าและหลายภูมิภาค รวมถึงการวิเคราะห์ ROI ของโครงการลงทุนขนาดใหญ่ และเทคนิคการนำเสนอผลประกอบการต่อคณะกรรมการบริหาร (Board)',
    skillsCovered: ['P&L Ownership at Scale', 'Board & Stakeholder Communication'],
    status: 'not-started',
    progress: 0,
    modules: [
      { id: 'm1', title: 'Reading Multi-Region P&L', duration: '60 นาที', completed: false },
      { id: 'm2', title: 'CAPEX vs OPEX Decision Making', duration: '90 นาที', completed: false },
      { id: 'm3', title: 'Investment Case & ROI Modeling', duration: '90 นาที', completed: false },
      { id: 'm4', title: 'Presenting Financials to the Board', duration: '60 นาที', completed: false },
    ],
  },
  {
    id: 'global-network-design',
    title: 'Global Supply Chain Network Design',
    category: 'digital',
    targetLevel: 'L10',
    duration: '8 สัปดาห์ · 5 ชม./สัปดาห์',
    format: 'Cohort-based · Live Workshop',
    instructor: 'MIT Center for Transportation & Logistics (Partner Program)',
    description:
      'ออกแบบเครือข่ายโลจิสติกส์และคลังสินค้าระดับโลก ด้วยข้อมูลและโมเดลเชิงปริมาณ เพื่อรองรับการขยายธุรกิจ',
    longDescription:
      'คอร์สร่วมกับพันธมิตรด้านโลจิสติกส์ระดับโลก สอนการออกแบบเครือข่ายศูนย์กระจายสินค้า การจำลองสถานการณ์ (Network Simulation) และการใช้ข้อมูลขนาดใหญ่ในการตัดสินใจเชิงกลยุทธ์เรื่องที่ตั้งคลังสินค้าและเส้นทางขนส่ง',
    skillsCovered: ['Global Network Design', 'Enterprise Strategic Planning'],
    status: 'not-started',
    progress: 0,
    modules: [
      { id: 'm1', title: 'Network Design Fundamentals', duration: '90 นาที', completed: false },
      { id: 'm2', title: 'Data-Driven Facility Location', duration: '120 นาที', completed: false },
      { id: 'm3', title: 'Simulation & Scenario Modeling', duration: '120 นาที', completed: false },
      { id: 'm4', title: 'Global Expansion Case Studies', duration: '90 นาที', completed: false },
      { id: 'm5', title: 'Capstone: Redesign a Regional Network', duration: '180 นาที', completed: false },
    ],
  },
  {
    id: 'executive-negotiation-influence',
    title: 'Executive Negotiation & Influence',
    category: 'leadership',
    targetLevel: 'L10',
    duration: '4 สัปดาห์ · 3 ชม./สัปดาห์',
    format: 'Live Workshop',
    instructor: 'สถาบันพัฒนาผู้นำองค์กร',
    description:
      'พัฒนาทักษะการเจรจาต่อรองและการสร้างอิทธิพลในระดับผู้บริหาร ทั้งกับคู่ค้า นักลงทุน และคณะกรรมการ',
    longDescription:
      'ฝึกฝนเทคนิคการเจรจาต่อรองระดับสูงผ่านสถานการณ์จำลอง (Simulation) ครอบคลุมการเจรจากับซัพพลายเออร์รายใหญ่ นักลงทุน และการสร้างแนวร่วมภายในองค์กรเพื่อผลักดันการเปลี่ยนแปลง',
    skillsCovered: ['Executive Negotiation', 'Board & Stakeholder Communication'],
    status: 'not-started',
    progress: 0,
    modules: [
      { id: 'm1', title: 'Principled Negotiation at Scale', duration: '90 นาที', completed: false },
      { id: 'm2', title: 'Managing High-Stakes Stakeholders', duration: '90 นาที', completed: false },
      { id: 'm3', title: 'Building Internal Coalitions', duration: '90 นาที', completed: false },
      { id: 'm4', title: 'Live Negotiation Simulation', duration: '120 นาที', completed: false },
    ],
  },
  {
    id: 'change-leadership-transformation',
    title: 'Leading Change at Enterprise Scale',
    category: 'leadership',
    targetLevel: 'L10',
    duration: '5 สัปดาห์ · 3 ชม./สัปดาห์',
    format: 'Self-paced + Mentorship',
    instructor: 'ฝ่ายพัฒนาบุคลากร (People Development)',
    description:
      'เรียนรู้การนำการเปลี่ยนแปลงระดับองค์กร ตั้งแต่ Digital Transformation จนถึงการควบรวม/ปรับโครงสร้าง',
    longDescription:
      'ครอบคลุมโมเดลการบริหารการเปลี่ยนแปลง (Change Management Models) การสื่อสารวิสัยทัศน์สู่องค์กรขนาดใหญ่ และกรณีศึกษาการทำ Digital Transformation ในอุตสาหกรรมโลจิสติกส์',
    skillsCovered: ['Change Leadership', 'Enterprise Strategic Planning'],
    status: 'completed',
    progress: 100,
    modules: [
      { id: 'm1', title: 'Change Management Fundamentals', duration: '60 นาที', completed: true },
      { id: 'm2', title: 'Communicating Vision at Scale', duration: '90 นาที', completed: true },
      { id: 'm3', title: 'Digital Transformation Case Studies', duration: '90 นาที', completed: true },
      { id: 'm4', title: 'Mentorship Check-in', duration: '45 นาที', completed: true },
    ],
  },
  {
    id: 'stakeholder-board-communication',
    title: 'Board & Stakeholder Communication',
    category: 'operations',
    targetLevel: 'L10',
    duration: '3 สัปดาห์ · 2 ชม./สัปดาห์',
    format: 'Self-paced',
    instructor: 'ฝ่ายสื่อสารองค์กร (Corporate Communications)',
    description:
      'ฝึกการสื่อสารข้อมูลเชิงปฏิบัติการให้กับคณะกรรมการบริหารและผู้ถือหุ้นอย่างกระชับและมีน้ำหนัก',
    longDescription:
      'สอนโครงสร้างการนำเสนอสำหรับที่ประชุมคณะกรรมการ การเล่าเรื่องด้วยข้อมูล (Data Storytelling) และการตอบคำถามเชิงกลยุทธ์ในสถานการณ์กดดัน',
    skillsCovered: ['Board & Stakeholder Communication', 'Executive Negotiation'],
    status: 'not-started',
    progress: 0,
    modules: [
      { id: 'm1', title: 'Structuring a Board Presentation', duration: '45 นาที', completed: false },
      { id: 'm2', title: 'Data Storytelling for Executives', duration: '60 นาที', completed: false },
      { id: 'm3', title: 'Handling Tough Questions Live', duration: '45 นาที', completed: false },
    ],
  },
  {
    id: 'warehouse-automation-fundamentals',
    title: 'Warehouse Automation Fundamentals',
    category: 'digital',
    targetLevel: 'L9',
    duration: '3 สัปดาห์ · 2 ชม./สัปดาห์',
    format: 'Self-paced',
    instructor: 'ฝ่ายเทคโนโลยีปฏิบัติการ',
    description:
      'พื้นฐานระบบอัตโนมัติในคลังสินค้า เช่น AS/RS, AMR และการวิเคราะห์ ROI ก่อนลงทุน',
    longDescription:
      'ปูพื้นฐานเทคโนโลยีอัตโนมัติที่ใช้ในคลังสินค้าสมัยใหม่ พร้อมกรณีศึกษาการเลือกเทคโนโลยีให้เหมาะกับสเกลการดำเนินงาน และการประเมินความคุ้มค่าการลงทุน',
    skillsCovered: ['Operations Excellence'],
    status: 'completed',
    progress: 100,
    modules: [
      { id: 'm1', title: 'AS/RS & AMR Overview', duration: '45 นาที', completed: true },
      { id: 'm2', title: 'Automation ROI Analysis', duration: '60 นาที', completed: true },
      { id: 'm3', title: 'Case Studies: Regional DCs', duration: '45 นาที', completed: true },
    ],
  },
];

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id);
}

function courseProgress(course) {
  if (!course.modules?.length) return course.progress ?? 0;
  const done = course.modules.filter((m) => m.completed).length;
  return Math.round((done / course.modules.length) * 100);
}

export function getCoursesWithProgress() {
  return COURSES.map((c) => ({ ...c, progress: courseProgress(c) }));
}

// AI Analyst: compares the employee's current competency levels against
// the next level's requirements and surfaces the gap + matching courses.
export function getSkillGapAnalysis(employee = EMPLOYEE, requirements = L10_REQUIREMENTS) {
  const skillMap = new Map(employee.skills.map((s) => [s.name, s.level]));
  return requirements
    .map((req) => {
      const current = skillMap.get(req.name) ?? 0;
      const gap = Math.max(0, req.level - current);
      const matchingCourses = COURSES.filter((c) => c.skillsCovered.includes(req.name));
      return {
        skill: req.name,
        current,
        required: req.level,
        gap,
        readiness: Math.min(100, Math.round((current / req.level) * 100)),
        courses: matchingCourses,
      };
    })
    .sort((a, b) => b.gap - a.gap);
}

export function getOverallReadiness(employee = EMPLOYEE, requirements = L10_REQUIREMENTS) {
  const gaps = getSkillGapAnalysis(employee, requirements);
  const avg = gaps.reduce((sum, g) => sum + g.readiness, 0) / gaps.length;
  return Math.round(avg);
}

// Courses recommended to close the widest gaps toward the next level,
// deduplicated and ranked by how many open gaps they address.
export function getRecommendedCourses(employee = EMPLOYEE, requirements = L10_REQUIREMENTS) {
  const gaps = getSkillGapAnalysis(employee, requirements).filter((g) => g.gap > 0);
  const scoreById = new Map();
  gaps.forEach((gap) => {
    gap.courses.forEach((course) => {
      const prev = scoreById.get(course.id) || { course, score: 0, gapSkills: [] };
      prev.score += gap.gap;
      prev.gapSkills.push(gap.skill);
      scoreById.set(course.id, prev);
    });
  });
  const withProgress = getCoursesWithProgress();
  return Array.from(scoreById.values())
    .map(({ course, score, gapSkills }) => ({
      ...withProgress.find((c) => c.id === course.id),
      gapSkills,
      matchScore: score,
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}
