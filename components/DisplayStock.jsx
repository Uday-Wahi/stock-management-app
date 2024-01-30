import { fetchData } from "@/actions/fetchDataAction";
import DeleteProduct from "@/components/DeleteProduct";

const displayStock = async () => {
  const displayData = await fetchData();
  return (
    <div className="container bg-blue-200 mx-auto overflow-y-auto md:flex-1.5 rounded-md">
      <h1 className="text-3xl font-bold text-center md:py-4 pt-3">
        Display Current Stock
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 py-2.5 px-4 md:p-4">
        {displayData.map((product) => (
          <div
            key={product._id}
            className="flex transform flex-col justify-between rounded-lg bg-white py-1 px-2 sm:p-2 md:p-6 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 relative"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb md:mb-1 text-indigo-600">
                {product.slug}
              </h2>
              <p className="text-lg md:text-xl font-medium text-orange-600">{`Quantity: ${product.quantity}`}</p>
            </div>
            <p className="text-base md:text-lg text-green-500 font-semibold self-end">
              {`Price: ₹${product.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default displayStock;
