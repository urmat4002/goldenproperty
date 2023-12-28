import style from './details-callback.module.scss';
import { Form } from '../../../features/form/form';

const DetailsCallBack = () => {
  return (
    <div className={style.dcb}>
      <div className={style.dcb__container}>
          <div className={style.dcb__content}>
            <h3>Order a call back</h3>
            <p>Fill form below and our agent will contact you shortly</p>
          </div>
          <Form />
      </div>
    </div>
  )
}

export default DetailsCallBack