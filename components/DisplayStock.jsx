import { fetchData } from "@/actions/fetchDataAction";
import StockCard from "./StockCard";

const displayStock = async () => {
  const displayData = await fetchData();
  return (
    <div className="container bg-blue-200 mx-auto overflow-y-auto md:flex-1.5 rounded-md">
      <h1 className="text-3xl font-bold text-center md:py-4 pt-3">
        Display Current Stock
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 py-2.5 px-4 md:p-4">
        {displayData.map((product) => (
          <StockCard
            key={product._id}
            id={product._id.toString()}
            slug={product.slug}
            quantity={product.quantity}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default displayStock;
