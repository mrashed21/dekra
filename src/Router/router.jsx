import { createBrowserRouter } from "react-router-dom";
// import DashBoardHome from "../Dashboard/Home/DashBoardHome";

import MainLayOut from "../Layout/MainLayOut";
import Home from "../page/Home/Home";
import Error from "../Error/Error";
import Companies from "../page/Companies/Companies";
import FindJob from "../page/FindJob/FindJob";
import InfoCorner from "../page/InfoCorner/InfoCorner";
import AboutDerka from "../page/AboutDerka/AboutDerka";

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
      {
        path: "/info-corner",
        element: <InfoCorner/>,
      },
      {
        path: "/dekra",
        element:<AboutDerka/>,
      },
    ],
  },
]);

export default router;
