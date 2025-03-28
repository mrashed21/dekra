import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import MainLayOut from "../Layout/MainLayOut";
import AboutDerka from "../page/AboutDerka/AboutDerka";
import Companies from "../page/Companies/Companies";
import FindJob from "../page/FindJob/FindJob";
import Home from "../page/Home/Home";
import InfoCorner from "../page/InfoCorner/InfoCorner";
import Contact from "../page/Contact/Contact";

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
        element: <Companies />,
      },
      {
        path: "/find-job",
        element: <FindJob />,
      },
      {
        path: "/info-corner",
        element: <InfoCorner />,
      },
      {
        path: "/dekra",
        element: <AboutDerka />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

export default router;
