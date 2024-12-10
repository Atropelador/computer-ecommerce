import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
// import Categories from "../components/Categories";

function Shopping() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { name: "all", label: "All" },
    { name: "men's clothing", label: "Mens Clothing" },
    { name: "women's clothing", label: "Womens Clothing" },
    { name: "electronics", label: "Electronics" },
    { name: "jewelery", label: "Jewelery" },
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterProducts = (event) => {
    const name = event.target.getAttribute("data-name");
    setActiveCategory(name);
    console.log(name);
  };

  const filteredProducts = activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
    //cart ja tem os produtos, agora precisa passar para o page cart. Possivelmente por um context, verificar
  }


  return (
    <>
      <Header></Header>
      <div>
        <ul className="flex">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`
                    flex-1 
                    text-center 
                    px-4 
                    py-2 
                    border 
                    border-indigo-600 
                    bg-gray-100 
                    text-gray-800 
                    hover:bg-indigo-600 
                    hover:text-white 
                    transition 
                    duration-300 
                    ease-in-out
                    cursor-pointer
                    ${activeCategory === category.name ? "bg-indigo-600 text-white font-bold" : ""}
                  `}
              data-name={category.name}
              onClick={filterProducts}
            >
              {category.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card products={filteredProducts} addToCart={addToCart}></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
