import { FC, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import styles from "./style/Layout.module.scss";
import { Context } from "./Context";
export const Layout: FC = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Context.Provider value={{ closeModal, openModal }}>
        <Header />
        {location.pathname !== "/" && <Breadcrumbs />}
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Context.Provider>
    </>
  );
};
