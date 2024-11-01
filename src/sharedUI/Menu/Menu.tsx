import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className={styles["menu"]}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? styles["active"] : ""
            }
          >
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/tasks"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? styles["active"] : ""
            }
          >
            <i className="fa-solid fa-list-check"></i>Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/earn"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? styles["active"] : ""
            }
          >
            <i className="fa-solid fa-trophy-star"></i> Top
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/friends"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? styles["active"] : ""
            }
          >
            <i className="fa-solid fa-user-group"></i> Friends
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/wallet"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? styles["active"] : ""
            }
          >
            <i className="fa-solid fa-wallet"></i>Wallet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
