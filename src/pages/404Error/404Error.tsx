import {Typography} from '@/shared/ui/Typography/Typography'
import error from './404Error.module.scss'

export const Error = () => {
  return (
    <div className={error.error}>
      <Typography variant="h1" weight="bold" color="white">
        404
      </Typography>
      <Typography variant="h3" weight="bold" color="white">
        Not found
      </Typography>

      <Typography variant="body" weight="regular" color="white">
        Sorry, the page was not found, it may have been moved, deleted, or
        temporarily unavailable; check that the address you entered is correct.
      </Typography>
    </div>
  )
}
