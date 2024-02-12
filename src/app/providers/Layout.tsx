import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingWhatsApp } from "@/features";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname !== "/" && <Breadcrumbs />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Modal />
    </>
  );
};
