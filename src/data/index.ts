import type {
  Project,
  Skill,
  TechRow,
  ExperienceItem,
  Certification,
  ApiLogLine,
  NavStop,
  MethodColors,
} from "@/types";

export const PROFILE = {
  name: "Suraj Patidar",
  role: "Backend Developer",
  email: "surajpatidar498@gmail.com",
  phone: "+91 6261922460",
  linkedin: "https://linkedin.com/in/suraj-patidar-777940279/",
  portfolio: "https://surajpatidar-uh74.onrender.com",
  tagline:
    "Building robust backends — REST APIs, database design & AI integrations.",
  bio1: "I design and build server-side systems that power modern products — REST APIs, database schemas, authentication flows, and AI integrations. I care deeply about clean code and reliable, scalable architecture.",
  bio2: "Currently pursuing B.Tech in Computer Science at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (Expected 2026). Open to internships and full-time roles — willing to relocate.",
  education: {
    degree: "B.Tech in Computer Science",
    college: "SVVV, Indore",
    year: "Expected 2026",
  },
} as const;

export const STOPS: NavStop[] = [
  { id: "hero", label: "INIT" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "STACK" },
  { id: "experience", label: "WORK" },
  { id: "contact", label: "CONNECT" },
];

export const SECTION_IDS = STOPS.map((s) => s.id);

export const PROJECTS: Project[] = [
  {
    name: "ai-content-platform",
    method: "POST",
    route: "/api/content/generate",
    tagline: "AI-Powered Content Platform",
    desc: "Full-stack platform with AI-driven content generation, image editing, resume review, and user blog features. Auth via Clerk, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini AI", "Clipdrop AI"],
    badge: "v1.0",
  },
  {
    name: "llm-chatbot",
    method: "WS",
    route: "/api/chat/stream",
    tagline: "LLM-Based Personal Chatbot",
    desc: "Intelligent chatbot that fetches user-specific data from MongoDB and provides personalised, context-aware responses via OpenAI LLM integration.",
    tags: ["Next.js", "Node.js", "MongoDB", "OpenAI API"],
    badge: "v1.0",
  },
  {
    name: "lottery-mgmt-api",
    method: "REST",
    route: "/api/lottery/*",
    tagline: "Lottery Management System (Internship)",
    desc: "Backend APIs for ticket purchase, wallet management, and result declaration. MySQL schemas for users, tickets, pools, and transactions. Secure JWT auth.",
    tags: ["Node.js", "Express", "MySQL", "JWT"],
    badge: "Internship",
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript / TypeScript", pct: 88 },
  { name: "Node.js & Express", pct: 85 },
  { name: "React & Next.js", pct: 82 },
  { name: "MongoDB & PostgreSQL", pct: 80 },
  { name: "REST API Design", pct: 87 },
  { name: "MySQL & DB Design", pct: 78 },
];

export const TECH_TABLE: TechRow[] = [
  { col: "languages", val: "C, C++, Java, TypeScript, JavaScript" },
  { col: "frontend", val: "React, Next.js, HTML, CSS" },
  { col: "backend", val: "Node.js, Express, MERN Stack" },
  { col: "databases", val: "MongoDB, PostgreSQL, MySQL" },
  { col: "auth & tools", val: "JWT, Clerk Auth, Stripe, Git/GitHub" },
  { col: "AI & APIs", val: "OpenAI API, Gemini AI, Clipdrop AI" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "MERN Stack Developer Intern",
    company: "Bheema Infotech, Indore",
    period: "Feb-2026 to",
    desc: "Worked as backend developer on a Lottery Management System. Designed REST APIs for user authentication, ticket purchase, and result management. Implemented wallet-based debit/credit flow with transaction tracking. Handled validation, error handling, and JWT-based secure auth.",
    tags: ["Node.js", "Express", "MySQL", "JWT", "REST API"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "MERN Stack", issuer: "Apna College" },
];

export const API_LINES: ApiLogLine[] = [
  {
    t: "00.001",
    type: "req",
    m: 'POST /api/lottery/buy-ticket  {"userId":"u_x9f2","pool":"weekly"}',
  },
  { t: "00.002", type: "dim", m: "→ Verifying JWT token..." },
  { t: "00.006", type: "dim", m: "→ Checking wallet balance [MySQL]" },
  {
    t: "00.009",
    type: "sql",
    m: "SELECT balance FROM wallets WHERE user_id = ?",
  },
  { t: "00.013", type: "ok", m: "← balance: ₹500  [4ms]" },
  {
    t: "00.014",
    type: "sql",
    m: "INSERT INTO tickets (id, user_id, pool_id) VALUES (?,?,?)",
  },
  {
    t: "00.019",
    type: "ok",
    m: "← Ticket created  [5ms]  ticket_id: tkt_a3b1",
  },
  { t: "00.020", type: "dim", m: "→ Debiting wallet ₹100..." },
  {
    t: "00.024",
    type: "ok",
    m: "← Wallet updated  [4ms]  new_balance: ₹400",
  },
  {
    t: "00.025",
    type: "res",
    m: '201 Created  [28ms]  {ticket:"tkt_a3b1",status:"active"}',
  },
  {
    t: "00.026",
    type: "win",
    m: "✓  Transaction committed  |  no errors  |  nominal",
  },
];

export const METHOD_COLORS: Record<string, MethodColors> = {
  POST: { bg: "bg-emerald-950", color: "text-emerald-400", border: "border-emerald-900" },
  WS: { bg: "bg-indigo-950", color: "text-indigo-400", border: "border-indigo-900" },
  REST: { bg: "bg-amber-950", color: "text-amber-400", border: "border-amber-900" },
};

export const TICKER = [
  "JavaScript", "TypeScript", "Node.js", "Express", "React", "Next.js",
  "MongoDB", "PostgreSQL", "MySQL", "REST API", "JWT", "Clerk Auth",
  "Stripe", "OpenAI", "Gemini AI", "Clipdrop AI", "Git", "Vercel", "Railway",
  "JavaScript", "TypeScript", "Node.js", "Express", "React", "Next.js",
  "MongoDB", "PostgreSQL", "MySQL", "REST API", "JWT", "Clerk Auth",
  "Stripe", "OpenAI", "Gemini AI", "Clipdrop AI", "Git", "Vercel", "Railway",
];
