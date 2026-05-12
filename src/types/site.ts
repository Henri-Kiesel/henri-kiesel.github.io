export interface SiteConfig {
  /** Anzeigename */
  name: string;
  /** Kurzbeschreibung unter dem Namen */
  tagline_de: string;
  tagline_en: string;
  /** Standort unter der Tagline (DE-Seite) */
  location_de?: string;
  /** Standort unter der Tagline (EN-Seite) */
  location_en?: string;
  /** Profilbild unter /public/... */
  profileImage: string;
  /** Größeres Bild für Lightbox (optional, sonst profileImage) */
  profileImageLarge?: string;
  /** Für „E-Mail kopieren“ in SocialLinks; leer = Button ausblenden */
  email?: string;
  /** Beliebige Social-Keys; bekannte Namen erhalten Icons in der UI. */
  social: Record<string, string | undefined>;
  /** Link zu diesem Repository (Footer „Quellcode“) */
  repoUrl: string;
}
