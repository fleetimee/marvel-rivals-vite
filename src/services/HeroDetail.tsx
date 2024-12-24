export interface HeroDetail {
  title: string;
  name: string;
  tag: string;
  description: string;
  lore: string;
  covers: string[];
  images: string[];
  stats: Stat[];
  skills: Skill[];
}

export interface Stat {
  title: string;
  value: string;
}

export interface Skill {
  title: string;
  icon: string;
  description: string;
  key: string;
  infos: SkillInfo[];
}

export interface SkillInfo {
  title: string;
  value: string;
}
