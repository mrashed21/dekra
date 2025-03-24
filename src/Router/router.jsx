import { createBrowserRouter } from "react-router-dom";
// import DashBoardHome from "../Dashboard/Home/DashBoardHome";

import MainLayOut from "../Layout/MainLayOut";
import Home from "../page/Home/Home";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
