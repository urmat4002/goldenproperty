import { Form } from "@/features/Form/Form";
import clsx from "clsx";
import modal from "./Modal.module.scss";
import { FormMessage } from "@/features/Form/FormMessage/FormMessage";
import { FC, useContext } from "react";
import { ModalContext } from "@/app/providers/Context";
import { useGetStaticForms } from "@/shared/api/hooks";

export const Modal: FC = () => {
  const { isCatalog } = useContext(ModalContext);
  const { isModalOpen } = useContext(ModalContext);
  const { closeModal } = useContext(ModalContext);
  const { isForm } = useContext(ModalContext);

  const { data } = useGetStaticForms();

  return (
    <div
      onClick={closeModal}
      className={clsx(modal.modal, isModalOpen && modal.active)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {isForm ? (
          <Form
            closeBtn
            catalog={isCatalog}
            title={data?.forms?.download_catalog}
            subTitle="Can you answer the following questions?"
          />
        ) : (
          <FormMessage />
        )}
      </div>
    </div>
  );
};
