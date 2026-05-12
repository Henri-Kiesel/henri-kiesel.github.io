import type { SkillItem } from '../types/skills';

export function skillItemLabel(item: SkillItem): string {
  return typeof item === 'string' ? item : item.label;
}

export function skillItemIcon(item: SkillItem): string | undefined {
  return typeof item === 'string' ? undefined : item.icon;
}
