export type Lang = 'en' | 'es';

export interface Project {
  n: string;
  name: string;
  role: string;
  year: string;
  desc: string;
  color: string;
  href?: string;
}

export interface Discipline {
  title: string;
  desc: string;
  tools: string[];
}
