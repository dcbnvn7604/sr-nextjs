import '@/i18n'
import { useTranslation } from 'react-i18next'
 
export default function Page() {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <h2>{t('welcome')}</h2>
    </div>
  )
}