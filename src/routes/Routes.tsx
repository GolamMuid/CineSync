import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    element: (
      <Main>
        {" "}
        <Home />{" "}
      </Main>
    ),
    path: "/",
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // ],
  },
]);

export default router;
