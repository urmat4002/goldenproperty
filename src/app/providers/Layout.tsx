import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import { ModalContext } from "./Context";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ModalContext.Provider value={{ closeModal, openModal }}>
        <Header />
        <Breadcrumbs />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <ScrollToTop />
      </ModalContext.Provider>
    </>
  );
};
