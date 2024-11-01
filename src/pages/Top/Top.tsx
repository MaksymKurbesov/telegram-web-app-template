import { Avatar } from "@mantine/core";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles["top-wrapper"]}>
      <picture className={styles["main-image"]}>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.gif"
          alt="💸"
          width="130"
          height="130"
        />
      </picture>
      <p className={styles["top-players-title"]}>Top Players</p>
      <ul className={styles["top-players-list"]}>
        <li>
          <span className={styles["list-number"]}>1</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>2</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>3</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>4</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>5</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>6</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>7</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
        <li>
          <span className={styles["list-number"]}>8</span>
          <Avatar className={styles["user-avatar"]} size={"md"} src={null} />
          <div>
            <p className={styles["user-name"]}>Michail</p>
            <span className={styles["user-points"]}>139.22K</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Top;
