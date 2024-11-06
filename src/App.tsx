import styles from "./App.module.css";
import AppLayout from "./layouts/AppLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTelegram } from "./hooks/useTelegram.ts";
import useUserStore from "./store/useUserStore.ts";
import { userService } from "./main.tsx";

function App() {
  const [items, setItems] = useState([]);
  const { user } = useTelegram();
  const { currentUser, fetchUser } = useUserStore();

  console.log(user, "user");

  useEffect(() => {
    fetchUser(user);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/items")
  //     .then((response) => {
  //       setItems(response.data);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div className={styles["mobile-container"]}>
      <AppLayout />
    </div>
  );
}

export default App;
