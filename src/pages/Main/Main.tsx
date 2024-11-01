import { Avatar, Progress } from "@mantine/core";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["progress"]}>
          <p>
            Lvl 3 <span>3 / 10</span>
          </p>
          <Progress
            className={styles["progress-bar"]}
            size="sm"
            value={50}
            color={"green"}
            striped
            animated
          />
        </div>
        <div className={styles["user-info"]}>
          <Avatar size={"sm"} src={null} />
          <span className={styles["user-nickname"]}>Pachka</span>
        </div>
      </header>
      <div className={styles["main"]}>main</div>
    </>
  );
};

export default Main;
