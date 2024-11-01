import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import App from "./App";
import Tasks from "./pages/Tasks/Tasks";
import Top from "./pages/Top/Top.tsx";
import Friends from "./pages/Friends/Friends.tsx";

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
    ],
  },
]);

export default routes;
