import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Nav from "../componetn/Nav";
import Footer from "../componetn/Footer";
import Posts from "../page/Posts";
import App from "../App";
import PostsContiner from "../page/PostsContiner";
function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PostsContiner /> },
      { path: "/", element: <PostsContiner /> },
      { path: "/:id", element: <Posts /> },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
