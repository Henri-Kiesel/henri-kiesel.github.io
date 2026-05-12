export interface CvEntry {
  id: string;
  title: string;
  /** Link zur Studiengangs-/Programmseite (wird am Titel angezeigt, z. B. Modulhandbuch) */
  programUrl?: string;
  org: string;
  /** Link zur Organisation (z. B. Arbeitgeber-Website; Uni-Name bleibt meist ohne Link) */
  orgUrl?: string;
  location?: string;
  period: string;
  /** Kurztext, immer sichtbar */
  summary: string;
  /** Ausführlicher Text im ausgeklappten Bereich (Zeilenumbrüche mit \\n) */
  details?: string;
  highlights?: string[];
  /** Kurze Skill-Tags (Pills) im ausgeklappten Bereich unter den Highlights */
  keySkills?: string[];
  /** Bannerbild oben in der Karte (Pfad unter /public, z. B. /assets/img/…) */
  bannerImage?: string;
}

export interface CvSection {
  id: string;
  title: string;
  entries: CvEntry[];
}

export interface CvDocument {
  sections: CvSection[];
}
