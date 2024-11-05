import styles from "./Wallet.module.css";
import TONIcon from "../../assets/icons/TON.svg";
import { Button } from "@mantine/core";
import moneyAnimation from "../../assets/lottie/money.tgs";

const Wallet = () => {
  return (
    <div className={styles["wallet"]}>
      <h1>Connect Wallet</h1>
      <tgs-player
        autoplay
        loop
        mode="normal"
        style={{ width: 150, height: 150, marginBottom: 45 }}
        src={moneyAnimation}
      ></tgs-player>
      <Button className={styles["connect-button"]}>
        <img src={TONIcon} alt={""} />
        Connect Wallet
      </Button>
      <p className={styles["description"]}>
        TON wallet allows you to make fast and secure blockchain-based payments
        without intermediaries.
      </p>
    </div>
  );
};

export default Wallet;
