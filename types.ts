
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  active?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  icon: string;
}
