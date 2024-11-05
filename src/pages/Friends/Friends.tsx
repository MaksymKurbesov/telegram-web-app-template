import { Avatar, Button } from "@mantine/core";
import styles from "./Friends.module.css";
import helloAnimation from "../../assets/lottie/friends.tgs";

const Friends = () => {
  return (
    <div className={styles["friends-wrapper"]}>
      <tgs-player
        autoplay
        loop
        mode="normal"
        style={{ width: 150, height: 150, margin: "0 auto", marginBottom: 10 }}
        src={helloAnimation}
      ></tgs-player>
      <div className={styles["invite-friend-wrapper"]}>
        <p className={styles["invite-friend-title"]}>Invite a friend</p>
        <p className={styles["invite-friend-subtitle"]}>
          +50,000 <span>For you and your friend</span>
        </p>
        <div className={styles["buttons"]}>
          <Button className={styles["invite-button"]}>Invite a friend</Button>
          <Button>
            <i className="fa-solid fa-copy"></i>
          </Button>
        </div>
      </div>
      <div className={styles["friends-list-wrapper"]}>
        <div className={styles["friends-title"]}>
          <h3>Friends</h3>
          <p className={styles["invited"]}>
            Invited <span>1</span>
          </p>
        </div>
        <ul className={styles["friends-list"]}>
          <li>
            <Avatar className={styles["friend-avatar"]} />
            <div className={styles["friend-info"]}>
              <p>Maksym Aleksandrovich</p>
              <p>0 lvl2</p>
            </div>
            <p className={styles["coin-reward"]}>+10,000</p>
          </li>
          <li>
            <Avatar className={styles["friend-avatar"]} />
            <div className={styles["friend-info"]}>
              <p>Maksym Aleksandrovich</p>
              <p>0 lvl2</p>
            </div>
            <p className={styles["coin-reward"]}>+10,000</p>
          </li>
          <li>
            <Avatar className={styles["friend-avatar"]} />
            <div className={styles["friend-info"]}>
              <p>Maksym Aleksandrovich</p>
              <p>0 lvl2</p>
            </div>
            <p className={styles["coin-reward"]}>+10,000</p>
          </li>
          <li>
            <Avatar className={styles["friend-avatar"]} />
            <div className={styles["friend-info"]}>
              <p>Maksym Aleksandrovich</p>
              <p>0 lvl2</p>
            </div>
            <p className={styles["coin-reward"]}>+10,000</p>
          </li>
          <li>
            <Avatar className={styles["friend-avatar"]} />
            <div className={styles["friend-info"]}>
              <p>Maksym Aleksandrovich</p>
              <p>0 lvl2</p>
            </div>
            <p className={styles["coin-reward"]}>+10,000</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Friends;
