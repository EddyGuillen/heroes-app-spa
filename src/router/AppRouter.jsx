import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { DcPage , HeroPage, HeroesRoutes, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "/",
    element: <HeroesRoutes />,
    children: [
      {
        path: "/*",
        element: <Navigate to={'/marvel'} />,
      },
      {
        path: "dc",
        element: <DcPage/>,
      },
      {
        path: "marvel",
        element: <MarvelPage/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      },
      {
        path: "hero",
        element: <HeroPage/>,
      },
      
    ]
  },
  
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
