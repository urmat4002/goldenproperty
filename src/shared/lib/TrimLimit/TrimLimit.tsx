import { FC } from 'react'
import { Typography } from '../../ui'
import { Link } from 'react-router-dom'
import styles from './TrimLimit.module.scss'


interface TrimmedText {
  text: string
  limit: number
  more: string
}

export const TrimLimit: FC<TrimmedText> = ({ text, limit, more }) => {
  const trimmedText = text.length > limit ? `${text.slice(0, limit)}...` : text

  return (
    <Typography variant="body" weight="regular" color="white">
      {trimmedText}
      <span className={styles.trim}>
        {text.length > limit && <Link to={more}>More</Link>}
      </span>
    </Typography>
  )
}
