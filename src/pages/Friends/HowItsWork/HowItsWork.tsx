import React from "react";
import styles from "./HowItsWork.module.css";
import {
  PREMIUM_REFERRAL_REWARD,
  REFERRAL_REWARD,
} from "../../../helpers/const.ts";
import Icon1 from "../../../assets/icons/HowItsWorkIcon1.svg";
import Icon2 from "../../../assets/icons/HowItsWorkIcon2.svg";
import Icon3 from "../../../assets/icons/HowItsWorkIcon3.svg";
import Icon4 from "../../../assets/icons/HowItsWorkIcon4.svg";
import CoinsIcon from "../../../assets/icons/coins.svg";

const HowItsWork = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["line"]}>
        <div className={styles["icon"]}>
          <img src={Icon1} />
        </div>
        <div className={styles["content"]}>
          <div className={styles["title"]}>Share link</div>
          <div className={styles["description"]}>
            Invite your friend via link.
          </div>
        </div>
      </div>
      <div className={styles["line"]}>
        <div className={styles["icon"]}>
          <img src={Icon2} alt={""} />
        </div>
        <div className={styles["content"]}>
          <div className={styles["title"]}>Invite a friend</div>
          <div className={styles["description"]}>
            Receive{" "}
            <span className={styles["highlight"]}>
              <img src={CoinsIcon} />+{REFERRAL_REWARD}
            </span>{" "}
            for you and your friend. For users with Telegram Premium{" "}
            <span className={styles["highlight"]}>
              <img src={CoinsIcon} />+{PREMIUM_REFERRAL_REWARD}
            </span>
          </div>
        </div>
      </div>
      <div className={styles["line"]}>
        <div className={styles["icon"]}>
          <img src={Icon3} alt={""} />
        </div>
        <div className={styles["content"]}>
          <div className={styles["title"]}>Receive comission</div>
          <div className={styles["description"]}>
            Receive{" "}
            <span className={styles["highlight"]}>
              <img src={CoinsIcon} alt={""} />
              +5%
            </span>{" "}
            for your friends mining income.
          </div>
        </div>
      </div>
      <div className={styles["line"]}>
        <div className={styles["icon"]}>
          <img src={Icon4} alt={""} />
        </div>
        <div className={styles["content"]}>
          <div className={styles["title"]}>Boost your income</div>
          <div className={styles["description"]}>
            Earn{" "}
            <span className={styles["highlight"]}>
              <img src={CoinsIcon} alt={""} />
              +1.50%
            </span>{" "}
            from the mining income of your friends' referrals
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
