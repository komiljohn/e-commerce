import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import styles from './style.module.scss'

const About: FC = () => {
  const { t } = useTranslation('about')
  return (
    <Container>
      <div className={styles.about}>
        <h1>{t('about')}</h1>
      </div>
    </Container>
  )
}

export default About
