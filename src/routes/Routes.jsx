import { createBrowserRouter } from "react-router-dom";
import Shopping from "../pages/Shopping.jsx";
import Cart from '../pages/Cart.jsx';
import Layout from "../pages/Layout.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "shopping",
      element: <Shopping />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

export default router;