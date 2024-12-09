import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Categories from "../components/Categories";

function Shopping() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card products={products}></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
