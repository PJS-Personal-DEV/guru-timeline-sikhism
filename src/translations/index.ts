
import { Translations } from './types';
import { generalTranslations } from './general';
import { introSectionTranslations } from './introSection';
import { timelineFiltersTranslations } from './timelineFilters';
import { footerTranslations } from './footerTranslations';
import { adminTranslations } from './adminTranslations';
import { eventManagementTranslations } from './eventManagementTranslations';
import { eventEditorTranslations } from './eventEditorTranslations';

// Combine all translations
export const translations: Translations = {
  ...generalTranslations,
  ...introSectionTranslations,
  ...timelineFiltersTranslations,
  ...footerTranslations,
  ...adminTranslations,
  ...eventManagementTranslations,
  ...eventEditorTranslations,
};
