const searchProduct = () => {
  return (
    <div className="container mx-auto bg-yellow-200 mb-6">
      <h1 className="text-3xl font-bold text-center py-4">Search a Product</h1>
      <div className="flex md:p-3 px-2 py-3 gap-2">
        <input
          type="text"
          placeholder="Search a product"
          className="flex-1 border p-2 rounded"
        />
        <select className="border md:px-4 py-2 rounded">
          <option value="">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>
    </div>
  );
};
export default searchProduct;
