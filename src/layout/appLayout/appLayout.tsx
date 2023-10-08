import { Outlet } from "react-router";
import styles from "./appLayout.module.scss";
import { Header } from "../../common/components/ui/layout/header/header";
import { Footer } from "../../common/components/ui/layout/footer/footer";

export const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
