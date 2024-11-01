import styles from "./App.module.css";
import AppLayout from "./layouts/AppLayout";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

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
