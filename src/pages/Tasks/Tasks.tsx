import { Avatar } from "@mantine/core";
import styles from "./Tasks.module.css";
import DailyRewardIcon from "../../assets/icons/daily-reward.png";
import TelegramIcon from "../../assets/icons/telegram-icon.png";
import ArrowIcon from "../../assets/icons/arrow.svg";

const TASKS = [
  { icon: TelegramIcon, title: "Join BC Token Channel", reward: 1000 },
  { icon: TelegramIcon, title: "Invite 3 friends", reward: 50000 },
  { icon: TelegramIcon, title: "Visit official website", reward: 1000 },
  { icon: TelegramIcon, title: "Connect the wallet", reward: 1000 },
  { icon: TelegramIcon, title: "Join BC.GAME's Discord", reward: 1000 },
  { icon: TelegramIcon, title: "Join BC.GAME's TG group", reward: 1000 },
];

const Tasks = () => {
  return (
    <div className={styles["tasks-wrapper"]}>
      <div className={styles["user-info"]}>
        <Avatar size={"xl"} />
        <h2>Pachka</h2>
        <p className={styles["id"]}>BCyidPkZZ</p>
      </div>
      <div className={styles["daily-bonus"]}>
        <h3 className={styles["title"]}>Daily bonus</h3>
        <div className={styles["task"]}>
          <img
            className={styles["task-icon"]}
            src={DailyRewardIcon}
            alt={""}
            height={40}
          />
          <p>Check in</p>
          <img className={styles["arrow-icon"]} src={ArrowIcon} alt={""} />
        </div>
      </div>
      <div className={styles["basic-tasks"]}>
        <h3 className={styles["title"]}>Basic task</h3>
        <div className={styles["tasks"]}>
          {TASKS.map((task) => {
            return (
              <div className={styles["task"]}>
                <img
                  className={styles["task-icon"]}
                  src={task.icon}
                  alt={""}
                  height={40}
                />
                <div>
                  <p>{task.title}</p>
                  <span>+1,000</span>
                </div>
                <img
                  className={styles["arrow-icon"]}
                  src={ArrowIcon}
                  alt={""}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["advanced-tasks"]}>
        <h3 className={styles["title"]}>Advanced task</h3>
        <div className={styles["tasks"]}>
          {TASKS.map((task) => {
            return (
              <div className={styles["task"]}>
                <img
                  className={styles["task-icon"]}
                  src={task.icon}
                  alt={""}
                  height={40}
                />
                <div>
                  <p>{task.title}</p>
                  <span>+1,000</span>
                </div>
                <img
                  className={styles["arrow-icon"]}
                  src={ArrowIcon}
                  alt={""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
