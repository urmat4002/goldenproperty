import { FC } from "react";
import clsx from "clsx";
import { Form } from "@/features/Form/Form";
import { FormMessage } from "@/features/Form/FormMessage/FormMessage";
import { useModalContext } from "@/app/providers/useModalContext";
import styles from "./Modal.module.scss";

export const Modal: FC = () => {
  const { modalVariant, closeModal } = useModalContext();

  return (
    <div
      onClick={closeModal}
      className={clsx(styles.modal, modalVariant && styles.active)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {modalVariant === "download_catalog" && <Form variant={modalVariant} />}
        {modalVariant === "sell" && <Form variant={modalVariant} />}
        {modalVariant === "form_message_success" && <FormMessage />}
        {modalVariant === "form_message_error" && (
          <FormMessage
            // FIX_ME
            title="The application has not been accepted!"
            subTitle="Try it again"
          />
        )}
      </div>
    </div>
  );
};
