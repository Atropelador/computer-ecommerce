export default function Card({ products }) {
  return products?.map((product) => (
    <a key={product.id} href={product.href} className="flex justify-between flex-col border-2 border-solid rounded-lg border-orange-400 p-6">
      <img alt={product.title} src={product.image} className="mb-auto mt-auto self-center" />
      <div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price}
        </p>
        {/* button to add to cart */}
        <button className="bg-orange-500 w-full p-1">Buy</button>
      </div>
    </a>
  ));
}
