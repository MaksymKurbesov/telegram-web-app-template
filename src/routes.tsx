import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import App from "./App";
import Tasks from "./pages/Tasks/Tasks";
import Top from "./pages/Top/Top.tsx";
import Friends from "./pages/Friends/Friends.tsx";
import Wallet from "./pages/Wallet/Wallet.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/earn",
        element: <Top />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
]);

export default routes;
