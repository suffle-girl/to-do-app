import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./Layout";
import "./global.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router}></RouterProvider>
);
