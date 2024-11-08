import styles from "./App.module.css";
import AppLayout from "./layouts/AppLayout";
import { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram.ts";
import useUserStore from "./store/useUserStore.ts";

function App() {
  const { user } = useTelegram();
  const { currentUser, fetchUser } = useUserStore();


  useEffect(() => {
    fetchUser(user);
  }, []);


  return (
    <div className={styles["mobile-container"]}>
      <AppLayout />
    </div>
  );
}

export default App;
