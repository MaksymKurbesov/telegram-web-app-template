import { Avatar, Button, Tabs } from "@mantine/core";
import styles from "./Friends.module.css";
import helloAnimation from "../../assets/lottie/friends.tgs";
import HowItsWork from "./HowItsWork/HowItsWork.tsx";

const Friends = () => {
  return (
    <div className={styles["friends-wrapper"]}>
      <Tabs variant="pills" defaultValue="first">
        <Tabs.List className={styles["tabs-list"]}>
          <Tabs.Tab className={styles["tab"]} value="first">
            Invite
          </Tabs.Tab>
          <Tabs.Tab className={styles["tab"]} value="second">
            Your friends
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">
          <h1 className={styles["invite-friends-title"]}>Invite friends</h1>
          <span className={styles["invite-friends-subtitle"]}>
            Both you and your friend will receive bonuses
          </span>
          <HowItsWork />
          <div className={styles["invite-friend-wrapper"]}>
            {/*<p className={styles["invite-friend-title"]}>Invite a friend</p>*/}
            {/*<p className={styles["invite-friend-subtitle"]}>*/}
            {/*  +50,000 <span>For you and your friend</span>*/}
            {/*</p>*/}
            <div className={styles["buttons"]}>
              <Button className={styles["invite-button"]}>
                Invite a friend
              </Button>
              <Button>
                <i className="fa-solid fa-copy"></i>
              </Button>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="second">
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
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Friends;
