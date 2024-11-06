import { Avatar, Progress } from "@mantine/core";
import styles from "./Main.module.css";
import useUserStore from "../../store/useUserStore.ts";
import { userService } from "../../main.tsx";

const Main = () => {
  const { currentUser } = useUserStore();

  const addPoints = () => {
    console.log("work");
    userService.addPoints(100);
  };

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
          <span className={styles["user-nickname"]}>
            {currentUser.firstName}
          </span>
        </div>
      </header>
      <div className={styles["main"]} onClick={addPoints}>
        Points: {currentUser.points}
      </div>
    </>
  );
};

export default Main;
