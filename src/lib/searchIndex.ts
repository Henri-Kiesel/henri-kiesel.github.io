import { skillItemLabel } from './skillItem';
import type { CvDocument } from '../types/cv';
import type { ProjectsDocument } from '../types/projects';
import type { SkillsDocument } from '../types/skills';

export interface SearchItem {
  label: string;
  href: string;
}

interface UiLike {
  navHome: string;
  navCv: string;
  navProjects: string;
  navSkills: string;
}

export function buildSearchItems(
  lang: 'de' | 'en',
  ui: UiLike,
  cv: CvDocument,
  projects: ProjectsDocument,
  skills: SkillsDocument,
): SearchItem[] {
  const home = lang === 'de' ? '/' : '/en/';
  const cvPath = lang === 'de' ? '/lebenslauf/' : '/en/cv/';
  const projPath = lang === 'de' ? '/projekte/' : '/en/projects/';
  const skillsPath = lang === 'de' ? '/faehigkeiten/' : '/en/skills/';

  const items: SearchItem[] = [];

  items.push({ label: ui.navHome, href: home });
  items.push({ label: ui.navCv, href: cvPath });
  items.push({ label: ui.navProjects, href: projPath });
  items.push({ label: ui.navSkills, href: skillsPath });

  for (const s of cv.sections) {
    items.push({ label: s.title, href: `${cvPath}#${s.id}` });
    for (const e of s.entries) {
      items.push({ label: e.title, href: `${cvPath}#${e.id}` });
    }
  }

  items.push({ label: projects.sectionTitle, href: projPath });
  for (const e of projects.entries) {
    items.push({ label: e.title, href: `${projPath}#${e.id}` });
  }

  for (const g of skills.groups) {
    items.push({ label: g.title, href: `${skillsPath}#${g.id}` });
    for (const it of g.items) {
      items.push({ label: skillItemLabel(it), href: `${skillsPath}#${g.id}` });
    }
  }

  return items;
}
