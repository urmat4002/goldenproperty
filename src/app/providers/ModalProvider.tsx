import { FC, ReactNode, useState } from "react";
import { ModalContext, ModalVariant } from "./useModalContext";

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalVariant, setModalVariant] = useState<ModalVariant>(null);

  const showFormMessageSuccess = () => {
    setModalVariant("form_message_success");
  };
  const showFormMessageError = () => {
    setModalVariant("form_message_error");
  };
  const downloadCatalog = (pdfUrl: string | undefined) => {
    if (localStorage.getItem("catalog")) {
      window.open(pdfUrl, "_blank");
      return;
    }
    setModalVariant("download_catalog");
  };
  const sellEstate = () => {
    setModalVariant("sell");
  };

  const closeModal = () => {
    setModalVariant(null);
  };

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        downloadCatalog,
        showFormMessageSuccess,
        showFormMessageError,
        sellEstate,
        modalVariant,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
