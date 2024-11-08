import { Avatar, Drawer } from "@mantine/core";
import styles from "./Tasks.module.css";
import DailyRewardIcon from "../../assets/icons/daily-reward.png";
import TelegramIcon from "../../assets/icons/telegram.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import XIcon from "../../assets/icons/x.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import ArrowIcon from "../../assets/icons/arrow.svg";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import DailyBonus from "./DailyBonus/DailyBonus.tsx";
import axios from "axios";

const SITE_ICON_MAP = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  x: XIcon,
  youtube: YoutubeIcon,
};

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openedDailyBonus, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      axios
        .get("http://localhost:5000/tasks")
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => console.error("Error fetching data:", error))
        .finally(() => setLoading(false))
    };

    fetchTasks()

  }, []);


  return (
    <div className={styles["tasks-wrapper"]}>
      <Drawer
        styles={{
          header: { backgroundColor: "rgba(0, 0, 0, 1)" },
          content: { backgroundColor: "rgba(0, 0, 0, 1)", color: "white" },
        }}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        offset={8}
        radius="md"
        opened={openedDailyBonus}
        className={styles["drawer"]}
        onClose={close}
        title="Daily Bonus"
        position={"bottom"}
      >
        <DailyBonus />
      </Drawer>
      <div className={styles["user-info"]}>
        <Avatar size={"xl"} />
        <h2>Pachka</h2>
        <p className={styles["id"]}>BCyidPkZZ</p>
      </div>
      <div className={styles["daily-bonus"]}>
        <h3 className={styles["title"]}>Daily bonus</h3>
        <div className={styles["task"]} onClick={open}>
          <img
            className={styles["task-icon"]}
            src={DailyRewardIcon}
            alt={""}
            height={35}
          />
          <p>Check in</p>
          <img className={styles["arrow-icon"]} src={ArrowIcon} alt={""} />
        </div>
      </div>
      <div className={styles["basic-tasks"]}>
        <h3 className={styles["title"]}>Basic task</h3>
        <div className={styles["tasks"]}>
          {loading ? (
            <span className={styles["loader"]}></span>
          ) : (
            tasks
              .filter((task) => task.type === "basic")
              .map((task) => {
                return (
                  <div key={task.id} className={styles["task"]}>
                    <img
                      className={styles["task-icon"]}
                      src={SITE_ICON_MAP[task.site]}
                      alt={""}
                      height={35}
                    />
                    <div>
                      <p>{task.title}</p>
                      <span className={styles["reward-points"]}>
                        +{task.reward.toLocaleString()}
                      </span>
                    </div>
                    <img
                      className={styles["arrow-icon"]}
                      src={ArrowIcon}
                      alt={""}
                    />
                  </div>
                );
              })
          )}
        </div>
      </div>
      <div className={styles["advanced-tasks"]}>
        <h3 className={styles["title"]}>Advanced task</h3>
        <div className={styles["tasks"]}>
          {loading ? (
            <span className={styles["loader"]}></span>
          ) : (
            tasks
              .filter((task) => task.type === "advanced")
              .map((task) => {
                return (
                  <div key={task.id} className={styles["task"]}>
                    <img
                      className={styles["task-icon"]}
                      src={SITE_ICON_MAP[task.site]}
                      alt={""}
                      height={35}
                    />
                    <div>
                      <p>{task.title}</p>
                      <span className={styles["reward-points"]}>
                        +{task.reward.toLocaleString()}
                      </span>
                    </div>
                    <img
                      className={styles["arrow-icon"]}
                      src={ArrowIcon}
                      alt={""}
                    />
                  </div>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
