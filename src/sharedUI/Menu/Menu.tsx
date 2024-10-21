import styles from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
      <nav>
        <ul className={styles["menu"]}>
          <li>
            <NavLink to={"/"}>
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tasks"}>
              <i className="fa-solid fa-list-check"></i>Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to={"/earn"}>
              <i className="fas fa-circle-dollar"></i> Earn
            </NavLink>
          </li>
          <li>
            <NavLink to={"/frens"}>
              <i className="fa-solid fa-user-group"></i> Frens
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Menu;
