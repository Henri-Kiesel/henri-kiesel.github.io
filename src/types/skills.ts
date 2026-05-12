/** Optional `icon`-Schlüssel siehe `SkillIcon.astro` / simple-icons Slugs */
export type SkillItem = string | { label: string; icon?: string };

export interface SkillGroup {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface SkillsDocument {
  intro?: string;
  groups: SkillGroup[];
}
