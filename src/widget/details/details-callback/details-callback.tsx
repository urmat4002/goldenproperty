import style from './details-callback.module.scss';
import { Form } from '../../../features/form/form';
import { Typography } from '../../../shared/ui/typography/typography'

const DetailsCallBack = () => {
  return (
    <div className={style.dcb}>
      <div className={style.dcb__container}>
          <div className={style.dcb__content}>
            <Typography variant='h2' weight='bold'>
              Order a call back
            </Typography>
            <Typography variant='label' weight='regular'>
              Fill form below and our agent will contact you shortly
            </Typography>
          </div>
          <Form />
      </div>
    </div>
  )
}

export default DetailsCallBack