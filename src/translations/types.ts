
export type Language = 'en' | 'pa';

export interface TranslationItem {
  en: string;
  pa: string;
}

export interface Translations {
  [key: string]: TranslationItem;
}
