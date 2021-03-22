import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import uz from './uz'
import ru from './ru'

i18n.use(initReactI18next).init({
  resources: { uz, ru },
  lng: localStorage.getItem('language') || 'ru',
  fallbackLng: 'ru',
  interpolation: {escapeValue: false},
  keySeparator: false,
  react: {wait: true},
  defaultNS: ['translations']
})

export default i18n
