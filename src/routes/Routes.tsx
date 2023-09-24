import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import MovieDetail from "../pages/MovieDetail";
import SearchResults from "../pages/SearchResults";

const router = createBrowserRouter([
  {
    element: <Main></Main>,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <MovieDetail />,
      },
      {
        path: "/search-results/:name",
        element: <SearchResults />,
      },
    ],
  },
]);

export default router;
