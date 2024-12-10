import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Shopping from "../pages/Shopping.jsx";
import Cart from '../pages/Cart.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
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