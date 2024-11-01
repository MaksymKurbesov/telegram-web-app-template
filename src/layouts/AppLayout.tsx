import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";
import Menu from "../sharedUI/Menu/Menu";
import { Avatar, Progress } from "@mantine/core";

const AppLayout = () => {
  return (
    <div className={styles["app-layout"]}>
      <div className={styles["content-wrapper"]}>
        <Outlet />
      </div>

      <footer>
        <Menu />
      </footer>
    </div>
  );
};

export default AppLayout;
