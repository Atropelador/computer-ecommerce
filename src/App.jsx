import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

export const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
});

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
  };

  return (
    <ShopContext.Provider value={{ cartItems: cart, products: [], addToCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}

export default App;