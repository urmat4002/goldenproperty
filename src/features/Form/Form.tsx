import { Button } from '@/shared/ui/Button/Button'
import { FC, ReactNode } from 'react'
import form from './Form.module.scss'
import { Input, Typography } from '@/shared/ui'

interface FromProps {
  title?: string
  subTitle?: string
  btnTitle?: string
  inputPlaceholder1?: string
  inputPlaceholder2?: string
  icon?: ReactNode
}

export const Form: FC<FromProps> = ({
  title,
  subTitle,
  btnTitle = 'Send',
  inputPlaceholder1 = 'City',
  inputPlaceholder2 = 'Date',
  icon,
}) => {
  return (
    <form className={form.form}>
      <div className={form.formTitle}>
        <Typography variant="h3" weight="medium" color="gold">
          {title}
        </Typography>
        <Typography variant="body" weight="medium" color="white">
          {subTitle}
        </Typography>
      </div>
      <div className={form.formInputs}>
        <div className={form.formWrapper}>
          <Input placeholder="Name" className={form.formInput} />
          <Input placeholder="Phone number" />
        </div>
        <div className={form.formWrapper}>
          <Input placeholder={inputPlaceholder1} />
          <Input placeholder={inputPlaceholder2} />
        </div>
      </div>
      <div className={form.formButton}>
        <Button type="primary">
          {btnTitle}
          {icon}
        </Button>
      </div>
    </form>
  )
}
