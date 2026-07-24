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

// "จากหน้างานจริง" — a field-veteran voice, distinct from the AI-curated
// course catalog. Lives at /courses/insights as a sub-section of courses.
export const FIELD_EXPERT = {
  name: 'สมพงษ์ ตั้งมั่นคง',
  nameEn: 'Sompong Tangmankong',
  title: 'Senior Warehouse Operations Manager',
  yearsExperience: 20,
  avatarInitials: 'ST',
  bio: 'เริ่มต้นเป็นพนักงานคลังสินค้าตั้งแต่ปี 2549 ไต่ระดับผ่านทุกตำแหน่งในสายปฏิบัติการจนถึงผู้จัดการอาวุโส ปัจจุบันดูแลศูนย์กระจายสินค้า 3 แห่ง และเป็นพี่เลี้ยง (mentor) ให้พนักงานที่กำลังเติบโตในสายงานคลัง-โลจิสติกส์',
};

export const ARTICLES = [
  {
    slug: 'lessons-from-20-years-warehouse-floor',
    title: '20 ปีบนพื้นคลังสินค้า: บทเรียนที่ไม่มีสอนในคอร์สไหน',
    excerpt:
      'ตำราสอนเรื่อง KPI และ Lean ได้ แต่ไม่มีใครสอนว่าจะทำอย่างไรเมื่อของมาไม่ตรงเวลา คนขาดกะกลางดึก และหัวหน้าต้องตัดสินใจเดี๋ยวนั้น',
    readTime: '6 นาที',
    tags: ['operations'],
    relatedLevels: ['L1', 'L2', 'L3'],
    content: [
      'ผมเริ่มงานเป็นพนักงานคลังสินค้าตอนอายุ 22 ปี ตอนนั้นคิดว่างานคลังคือการยกของ สแกนบาร์โค้ด แล้วก็จบกะกลับบ้าน ผ่านไป 20 ปี ผมถึงเข้าใจว่าสิ่งที่ยากที่สุดของงานนี้ไม่ใช่แรงกาย แต่คือการตัดสินใจภายใต้ความไม่แน่นอน',
      'ในตำราเรียนหรือคอร์สออนไลน์ เขาจะสอนกรอบ Lean, 5S, หรือ KPI ต่างๆ ได้อย่างเป็นระบบ แต่ไม่มีคอร์สไหนสอนว่าเมื่อรถขนส่งมาช้า 3 ชั่วโมง คนขาดงานกะดึก 4 คนพร้อมกัน และลูกค้ารายใหญ่โทรมาทวงของด่วน คุณจะจัดลำดับความสำคัญอย่างไรภายใน 10 นาที',
      'บทเรียนแรกที่ผมอยากฝากไว้คือ "ตัวเลขในระบบไม่เคยโกหก แต่ก็ไม่เคยบอกความจริงทั้งหมด" ระบบ WMS จะบอกคุณว่าของอยู่ตรงไหน แต่จะไม่บอกว่าพนักงานคนไหนกำลังหมดไฟ หรือ location ไหนที่จริงๆ แล้วของกองสุมจนหยิบไม่ได้จริง ต้องลงไปเดินดูเองเท่านั้น',
      'บทเรียนที่สองคือ ทุกครั้งที่เกิดปัญหาหน้างาน ให้ถามตัวเองสองคำถาม: "ถ้าไม่แก้วันนี้ พรุ่งนี้จะแย่กว่านี้แค่ไหน" และ "ถ้าแก้แบบเร่งด่วนตอนนี้ จะสร้างปัญหาใหม่ให้กะถัดไปหรือเปล่า" คนที่เก่งเรื่องทฤษฎีมักตอบคำถามแรกได้ดี แต่คนที่อยู่หน้างานมานานเท่านั้นที่จะตอบคำถามที่สองได้แม่นยำ',
      'ถ้าคุณกำลังเริ่มต้นในสายงานนี้ อยากให้จำไว้ว่าประสบการณ์หน้างานไม่ได้มีไว้แทนที่ความรู้ในคอร์สเรียน แต่มันคือสิ่งที่ทำให้ความรู้เหล่านั้นใช้งานได้จริง',
    ],
  },
  {
    slug: 'peak-season-crisis-management',
    title: 'รับมือ Peak Season: บทเรียนจากวิกฤตที่เกือบทำให้คลังทั้งหมดหยุดชะงัก',
    excerpt:
      'ปีที่ออเดอร์พุ่งขึ้น 4 เท่าในสัปดาห์เดียว ระบบล่ม คนไม่พอ และสิ่งที่ช่วยให้ทีมรอดมาได้ไม่ใช่แผนสำรอง แต่คือการสื่อสารที่ตรงไปตรงมา',
    readTime: '7 นาที',
    tags: ['operations', 'leadership'],
    relatedLevels: ['L4', 'L5', 'L6'],
    content: [
      'ปี 2560 ช่วงเทศกาลปลายปี ออเดอร์พุ่งขึ้นจากวันละ 3,000 ชิ้น เป็น 12,000 ชิ้นภายในสัปดาห์เดียว ระบบ WMS ที่เราใช้อยู่ไม่เคยถูกทดสอบที่โหลดขนาดนี้มาก่อน และมันล่มกลางดึกในคืนที่สำคัญที่สุด',
      'สิ่งแรกที่ผมทำไม่ใช่การพยายามแก้ระบบด้วยตัวเอง แต่คือการรวมหัวหน้ากะทุกคนมาคุยกันตรงๆ ว่า "ตอนนี้เราไม่รู้ว่าระบบจะกลับมาเมื่อไหร่ เราต้องทำงานแบบ manual ไปก่อน ใครมีข้อเสนออะไรบ้าง" การยอมรับว่าไม่มีคำตอบสำเร็จรูป กลับทำให้ทีมกล้าเสนอไอเดียมากขึ้น',
      'เราแบ่งทีมเป็น 3 กลุ่มแบบ manual: กลุ่มนับสต็อกด้วยกระดาษ กลุ่มจัดลำดับออเดอร์ตาม SLA ลูกค้า และกลุ่มสื่อสารกับฝ่ายขนส่งเพื่อประเมินรอบรถใหม่ ทั้งหมดนี้ไม่มีอยู่ใน SOP เพราะไม่มีใครคาดคิดว่าระบบจะล่มพร้อมกับพีคที่สุดของปี',
      'สิ่งที่ผมเรียนรู้คือ แผนสำรอง (contingency plan) มีประโยชน์ก็จริง แต่สิ่งที่ตัดสินว่าทีมจะรอดหรือพังคือ "ความไว้ใจ" ที่สร้างไว้ล่วงหน้า ถ้าทีมไม่ไว้ใจหัวหน้าพอที่จะทำงานแบบไม่มีคำสั่งชัดเจนในสถานการณ์ฉุกเฉิน ต่อให้มีแผนดีแค่ไหนก็ไปไม่รอด',
      'สำหรับใครที่กำลังจะขึ้นเป็นหัวหน้ากะหรือ Supervisor ผมอยากให้ฝึกสร้างความไว้ใจกับทีมตั้งแต่วันที่ยังไม่มีวิกฤต เพราะวันที่วิกฤตมาจริง จะไม่มีเวลาสร้างมันแล้ว',
    ],
  },
  {
    slug: 'from-associate-to-supervisor',
    title: 'จากพนักงานคลังสู่หัวหน้างาน: 5 สิ่งที่ต้องพิสูจน์ก่อนได้เลื่อนตำแหน่งจริง',
    excerpt:
      'ผมเคยเป็นกรรมการพิจารณาเลื่อนตำแหน่งมาแล้วหลายสิบครั้ง คนที่ได้ไปต่อไม่ใช่คนที่ทำงานเก่งที่สุดเสมอไป แต่เป็นคนที่มีคุณสมบัติ 5 ข้อนี้',
    readTime: '5 นาที',
    tags: ['leadership'],
    relatedLevels: ['L2', 'L3', 'L4'],
    content: [
      'หลายคนเข้าใจว่าการเลื่อนจากพนักงานคลังเป็นหัวหน้างานวัดกันที่ผลงานส่วนตัว เช่น หยิบของเร็ว ทำงานแม่นยำ ไม่มีของตกหล่น แต่ในความเป็นจริง สิ่งเหล่านี้เป็นแค่ "ใบเบิกทาง" ไม่ใช่ตัวตัดสิน',
      'ข้อที่หนึ่งคือ ความสามารถในการอธิบายงานให้คนอื่นเข้าใจ ไม่ใช่แค่ทำเองเก่ง คนที่ทำงานเก่งแต่สอนคนอื่นไม่ได้ มักจะเป็นคอขวดของทีมเมื่อขึ้นตำแหน่ง',
      'ข้อที่สองคือ ความกล้าแจ้งปัญหาก่อนที่หัวหน้าจะถาม พนักงานที่รอให้ถูกถามก่อนถึงจะบอกปัญหา สะท้อนว่ายังไม่พร้อมรับผิดชอบงานที่ใหญ่ขึ้น',
      'ข้อที่สามคือ การรักษาคำพูดกับเพื่อนร่วมงาน แม้เรื่องเล็กน้อยอย่างสลับกะ ถ้าทำไม่ได้ตามที่รับปาก ทีมจะไม่ไว้ใจให้ดูแลตารางงานคนอื่น',
      'ข้อที่สี่คือ ความสามารถในการรับฟีดแบ็กโดยไม่ตั้งการ์ด คนที่ตั้งรับทุกครั้งที่ถูกท้วงติง มักมีปัญหาเมื่อต้องบริหารทีมที่มีความเห็นหลากหลาย',
      'ข้อที่ห้า และสำคัญที่สุด คือความสม่ำเสมอ ไม่ใช่แค่ทำงานดีในวันที่มีคนดู แต่ต้องทำงานได้มาตรฐานเดียวกันแม้ไม่มีใครมอง เพราะนั่นคือสิ่งที่หัวหน้าต้องทำทุกวัน',
    ],
  },
  {
    slug: 'building-frontline-trust',
    title: 'สร้างความไว้ใจกับทีมหน้างาน: สิ่งที่ผู้บริหารรุ่นใหม่มักมองข้าม',
    excerpt:
      'ผู้บริหารที่จบปริญญาด้าน Supply Chain มาโดยตรง มักเก่งเรื่องตัวเลขและกลยุทธ์ แต่พลาดเรื่องพื้นฐานที่สุด นั่นคือการเดินลงไปหาทีมหน้างานจริงๆ',
    readTime: '5 นาที',
    tags: ['leadership'],
    relatedLevels: ['L6', 'L7', 'L8'],
    content: [
      'ผมเคยทำงานร่วมกับผู้บริหารรุ่นใหม่หลายคนที่เก่งมากในห้องประชุม วิเคราะห์ตัวเลขได้แม่น นำเสนอกลยุทธ์ได้น่าเชื่อถือ แต่พอลงพื้นที่จริง ทีมงานกลับไม่ค่อยเปิดใจคุยด้วย',
      'สาเหตุหลักที่ผมสังเกตเห็นคือ ผู้บริหารเหล่านี้มักเดินคุยกับ "ตัวเลข" มากกว่า "คน" เขาจะถามว่า throughput วันนี้เท่าไหร่ error rate เท่าไหร่ แต่ไม่เคยถามว่า "วันนี้เหนื่อยไหม" หรือ "มีอะไรที่อยากให้ผมช่วยแก้ไหม"',
      'ทีมหน้างานรู้ปัญหาจริงมากกว่าตัวเลขในระบบเสมอ เพราะพวกเขาเห็นของเสียหายที่ยังไม่ถูกบันทึก เห็นจุดที่ layout คลังทำให้เดินอ้อมโดยไม่จำเป็น หรือรู้ว่าเครื่องจักรตัวไหนที่เสียบ่อยจนต้องซ่อมเองเป็นประจำ',
      'คำแนะนำของผมสำหรับผู้บริหารที่กำลังก้าวขึ้นสู่ตำแหน่งสูงคือ ให้เวลาอย่างน้อยสัปดาห์ละ 1-2 ชั่วโมงเดินคุยกับทีมหน้างานแบบไม่มีวาระ ไม่ต้องถือคลิปบอร์ด ไม่ต้องมีทีมตามถ่ายรูป แค่ไปฟังจริงๆ ความไว้ใจที่ได้กลับมาจะมีค่ามากกว่ารายงานใดๆ',
    ],
  },
  {
    slug: 'reading-the-warehouse-floor',
    title: 'อ่านพื้นคลังให้ออก: สัญญาณเตือนที่ตัวเลขในระบบไม่เคยบอกคุณ',
    excerpt:
      'ก่อนที่ปัญหาจะกลายเป็นตัวเลขสีแดงในรายงาน มันจะแสดงสัญญาณเตือนที่พื้นคลังก่อนเสมอ ถ้าคุณรู้จักสังเกต',
    readTime: '6 นาที',
    tags: ['operations', 'digital'],
    relatedLevels: ['L4', 'L5', 'L6'],
    content: [
      'มีคำพูดหนึ่งที่รุ่นพี่สอนผมตอนเป็น Supervisor ใหม่ๆ ว่า "ถ้ารอให้รายงานบอกว่ามีปัญหา แปลว่าคุณช้าไปแล้วอย่างน้อย 3 วัน" ตอนนั้นผมไม่ค่อยเข้าใจ แต่ทำงานไปเรื่อยๆ ถึงเห็นภาพชัดขึ้น',
      'สัญญาณแรกที่ผมสังเกตคือ พฤติกรรมการเดินของพนักงาน ถ้าคุณเห็นคนเดินไปมาซ้ำๆ ระหว่างโซนเก็บของโดยไม่มีของในมือ มักหมายความว่า location ในระบบกับของจริงไม่ตรงกัน และกำลังจะกลายเป็นปัญหา stock accuracy ในอีกไม่กี่วัน',
      'สัญญาณที่สองคือ เสียงพูดคุยในไลน์กลุ่มของทีม ถ้าจู่ๆ มีคนถามคำถามเดิมซ้ำๆ เกี่ยวกับขั้นตอนงาน อาจหมายความว่า SOP ที่ใช้อยู่ไม่ทันกับการเปลี่ยนแปลงของงานจริงแล้ว',
      'สัญญาณที่สามคือ ของที่ค้างอยู่หน้าโซน picking นานผิดปกติ แม้จะยังไม่เกิน SLA แต่ถ้าเริ่มเห็นบ่อยขึ้นเรื่อยๆ มักเป็นสัญญาณว่ากำลังจะขาดกำลังคนในกะถัดไป',
      'เทคโนโลยีและระบบ dashboard ช่วยให้เห็นภาพรวมได้เร็วขึ้นมากในยุคนี้ก็จริง แต่ผมยังเชื่อว่าไม่มีอะไรแทนที่การเดินคลังด้วยตาตัวเองได้ ยิ่งขึ้นตำแหน่งสูงเท่าไหร่ ยิ่งต้องรักษาทักษะนี้ไว้ให้ดี',
    ],
  },
  {
    slug: 'what-i-wish-i-knew-at-l5',
    title: 'ถ้าย้อนกลับไปเป็น Logistics Coordinator อีกครั้ง ผมจะทำสิ่งนี้',
    excerpt:
      'ตอนเป็น Logistics Coordinator ผมโฟกัสแต่การทำงานของตัวเองให้สมบูรณ์แบบ แต่สิ่งที่ทำให้ผมขึ้นตำแหน่งต่อได้เร็วขึ้นกลับเป็นเรื่องที่ผมไม่ได้ให้ความสำคัญตั้งแต่แรก',
    readTime: '5 นาที',
    tags: ['strategy'],
    relatedLevels: ['L5'],
    content: [
      'ตำแหน่ง Logistics Coordinator เป็นช่วงที่ผมทำงานหนักที่สุดช่วงหนึ่ง เพราะต้องประสานงานระหว่างคลังสินค้า ฝ่ายขนส่ง และฝ่ายขาย พร้อมกันตลอดเวลา ตอนนั้นผมตั้งเป้าแค่ว่า "ทำให้ทุกอย่างไหลลื่นที่สุด" โดยไม่พลาด',
      'สิ่งที่ผมมองข้ามไปคือ การทำความเข้าใจว่าฝ่ายอื่นๆ ที่ผมประสานงานด้วยมีเป้าหมายและแรงกดดันอะไรอยู่ ผมมักมองว่าฝ่ายขายเป็นคนที่ "รับปากลูกค้าเกินจริงตลอด" แทนที่จะเข้าใจว่าฝ่ายขายก็มี KPI ของตัวเองที่ต้องรับผิดชอบเช่นกัน',
      'ถ้าย้อนกลับไปได้ ผมจะใช้เวลาไปนั่งคุยกับฝ่ายขายและฝ่ายขนส่งแบบไม่มีวาระเรื่องงานเลยสักครั้งต่อเดือน เพื่อเข้าใจข้อจำกัดของแต่ละฝ่ายจริงๆ เพราะทักษะที่ทำให้คนขึ้นเป็น Manager ได้เร็ว ไม่ใช่แค่ประสานงานเก่ง แต่คือการมองเห็นภาพรวมทั้งห่วงโซ่อุปทานได้ตั้งแต่ตำแหน่งที่ยังไม่ใช่ผู้บริหาร',
      'อีกเรื่องที่ผมจะทำต่างออกไปคือ การจดบันทึกปัญหาที่เกิดซ้ำๆ อย่างเป็นระบบ ตอนนั้นผมแก้ปัญหาเฉพาะหน้าไปเรื่อยๆ โดยไม่ได้สรุปเป็นข้อมูลให้ผู้บริหารเห็นภาพรวม พอมาเป็นผู้บริหารเองถึงเข้าใจว่าข้อมูลแบบนี้มีค่ามากแค่ไหนสำหรับการตัดสินใจเชิงกลยุทธ์',
    ],
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}
