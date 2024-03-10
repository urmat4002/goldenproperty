import { FC } from "react";
import clsx from "clsx";
import { Form } from "@/features/Form/Form";
import { useModalContext } from "@/app/providers/useModalContext";
import styles from "./Modal.module.scss";

export const Modal: FC = () => {
  const { modalVariant, closeModal } = useModalContext();

  return (
    <div
      onMouseDown={closeModal}
      className={clsx(styles.modal, modalVariant && styles.active)}
    >
      <div
        className="stop-propagation"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {modalVariant === "download_catalog" && <Form variant={modalVariant} />}
        {modalVariant === "sell" && <Form variant={modalVariant} />}
      </div>
    </div>
  );
};
