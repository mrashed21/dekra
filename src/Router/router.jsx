import { createBrowserRouter } from "react-router-dom";
// import DashBoardHome from "../Dashboard/Home/DashBoardHome";

import MainLayOut from "../Layout/MainLayOut";
import Home from "../page/Home/Home";
import Error from "../Error/Error";
import Companies from "../page/Companies/Companies";
import FindJob from "../page/FindJob/FindJob";

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
      {
        path: "/for-companies",
        element: <Companies/>,
      },
      {
        path: "/find-job",
        element: <FindJob/>,
      },
    ],
  },
]);

export default router;
