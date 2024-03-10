import { merge } from 'lodash';
export function createLocale(locale, fallbackLocale) {
    return merge({}, fallbackLocale, locale);
}
