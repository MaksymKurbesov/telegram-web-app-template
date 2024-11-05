import styles from './DailyBonus.module.css';
import {Button} from "@mantine/core";

const DailyBonus = () => {
  const items = Array.from({ length: 30 }, (_, index) => index);

  return <div className={styles['daily-bonus']}>
    <ul>
      {items.map((item, index) => {
        return <li className={`${index === 0 ? styles['completed'] : ""} ${index === 1 ? styles['active'] : ""}`}>
          <p>Day {index + 1}</p>
          <i className="fa-duotone fa-solid fa-coin"></i>
          <span>+100</span>
        </li>
      })}
    </ul>
    <Button className={styles['claim-button']}>Claim</Button>
  </div>;
};

export default DailyBonus;