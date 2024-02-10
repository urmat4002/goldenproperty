import { Form } from "@/features/Form/Form";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/hooks";
import { setCloseModal } from "@/shared/slices/Modal/ModalSlice";

import clsx from "clsx";

import modal from "./Modal.module.scss";

export const Modal = () => {
  const isOpen = useAppSelector((state) => state.modalSlice.isOpen);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(setCloseModal())}
      className={clsx(modal.modal, isOpen && modal.active)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Form closeBtn />
      </div>
    </div>
  );
};
