export interface Project {
  name: string;
  method: "POST" | "WS" | "REST";
  route: string;
  tagline: string;
  desc: string;
  tags: string[];
  badge: string;
}

export interface Skill {
  name: string;
  pct: number;
}

export interface TechRow {
  col: string;
  val: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ApiLogLine {
  t: string;
  type: "req" | "res" | "ok" | "sql" | "dim" | "win";
  m: string;
}

export interface NavStop {
  id: string;
  label: string;
}

export interface MethodColors {
  bg: string;
  color: string;
  border: string;
}
