import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../authPages/RegisterPage";
import LoginPage from "../authPages/LoginPage";
import TaskList from "../component/TaskList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element:<RegisterPage /> ,
      },
      {
        path: "login",
        element:<LoginPage /> ,
      },
      {
        path: "/",
        element:  <TaskList />,
       
      },
    ],
  },
]);

export default router;
