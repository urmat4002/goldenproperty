import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../app/lib/store/hooks';
import { setClose } from '../../app/lib/features/modal/modal-slice';
import { Button } from '../../shared/button/button';
import { Form } from '../../features/form/form';
import style from './modal.module.scss';

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
            <h3>Sell an appartment through our company!</h3>
            <p>Fill form below and our agent will contact you shortly</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
