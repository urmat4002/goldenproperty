import { Form } from "@/features/Form/Form";
import clsx from "clsx";
import modal from "./Modal.module.scss";
import { FormMessage } from "@/features/Form/FormMessage/FormMessage";
import { useAppSelector } from "@/shared/hooks/hooks";
import { FC } from "react";

interface ModalProps {
  title?: string;
  isModalOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsModalOpen: (bool: boolean) => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const isForm = useAppSelector((state) => state.modalSlice.isForm);
  const isCatalog = useAppSelector((state) => state.formSlice.isCatalog);

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className={clsx(modal.modal, isModalOpen && modal.active)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {isForm ? <Form closeBtn catalog={isCatalog} /> : <FormMessage />}
      </div>
    </div>
  );
};
