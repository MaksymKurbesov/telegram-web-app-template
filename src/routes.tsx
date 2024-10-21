import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import App from "./App";
import Tasks from "./pages/Tasks/Tasks";
import Earn from "./pages/Earn/Earn";
import Frens from "./pages/Frens/Frens";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/tasks",
        element: <Tasks/>
      },
      {
        path: "/earn",
        element: <Earn/>
      },
      {
        path: "/frens",
        element: <Frens/>
      }
    ]
  }
]);

export default routes;