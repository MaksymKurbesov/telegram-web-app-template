import { Avatar } from "@mantine/core";
import styles from "./Top.module.css";
import trophyAnimation from "../../assets/lottie/trophy.tgs";

const Top = () => {
  return (
    <div className={styles["top-wrapper"]}>
      <tgs-player
        autoplay
        loop
        mode="normal"
        style={{ width: 150, height: 150, margin: "0 auto", marginBottom: 10 }}
        src={trophyAnimation}
      ></tgs-player>
      <p className={styles["top-players-title"]}>Top Players</p>
      <p className={styles["top-players-subtitle"]}>
        The Elite: Top-Ranked Players on the Path to Greatness
      </p>
      <ul className={styles["top-players-list"]}>
        <li>
          <span className={styles["list-number"]}>1</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>2</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Vitya</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>3</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Kolya</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>4</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Vasiliy</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>5</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Innokentiy</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>6</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Petr</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>7</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Lui</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>8</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div className={styles["user-info"]}>
            <p className={styles["user-name"]}>Jordan</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Top;
