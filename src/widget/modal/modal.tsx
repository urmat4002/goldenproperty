import { X } from 'lucide-react';
import { useEffect } from 'react';
import { setClose } from '../../app/lib/features/modal/modal-slice';
import { useAppDispatch, useAppSelector } from '../../app/lib/store/hooks';
import { Form } from '../../features/form/form';
import { Button } from '../../shared/ui/button/button';
import style from './modal.module.scss';
import { Typography } from '../../shared/ui/typography/typography'

const Modal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modalSlice.isOpen);
  const modalClass = isOpen
    ? style['modal--open'] && style['overlay--open']
    : style['modal--close'] && style['overlay--close'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div className={`${style.overlay} ${modalClass}`}>
      <div className={`${style.modal} ${modalClass}`}>
        <div className={style.modal__button_close}>
          <Button onClick={() => dispatch(setClose())} types="icon">
            <X />
          </Button>
        </div>
        <div className={style.modal__container}>
          <div className={style.modal__content}>
            <Typography variant='h3' weight='bold'>Sell an appartment through our company!</Typography>
            <Typography variant='label' weight='regular'>Fill form below and our agent will contact you shortly</Typography>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
