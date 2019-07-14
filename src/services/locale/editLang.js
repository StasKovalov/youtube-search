import {RU_TEXT, ENG_TEXT} from './translations';

export let TEXT = RU_TEXT // текст по дефолту

const LOCALES = {
  ru: RU_TEXT,
  en: ENG_TEXT,
}

export const changeLocale = locale => {
  TEXT = LOCALES[locale]
}
