import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import { ModalContext } from "./Context";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState("");
  const [PDFURL, setPDFURL] = useState<string | undefined>();
  //const [isForm, setIsForm] = useState(true);

  const showFormMessageSuccess = () => {
    setIsModalOpen("form_message_success");
  };
  const showFormMessageError = () => {
    setIsModalOpen("form_message_error");
  };
  const downloadCatalog = (pdfUrl: string | undefined) => {
    if (localStorage.getItem("catalog")) {
      window.open(pdfUrl, "_blank");
      return;
    }
    setPDFURL(pdfUrl);
    setIsModalOpen("download_catalog");
  };
  const sellEstate = () => {
    setIsModalOpen("sell");
  };

  const closeModal = () => {
    setIsModalOpen("");
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          closeModal,
          downloadCatalog,
          showFormMessageSuccess,
          showFormMessageError,
          sellEstate,
          isModalOpen,
          PDFURL,
        }}
      >
        <Header />
        <Breadcrumbs />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />

        <Modal />
        <ScrollToTop />
      </ModalContext.Provider>
    </>
  );
};
