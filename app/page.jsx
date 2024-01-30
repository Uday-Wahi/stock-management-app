import Header from "@/components/Header";
import SearchProduct from "@/components/SearchProduct";
import AddProduct from "@/components/AddProduct";
import DisplayStock from "@/components/DisplayStock";

export default function Home() {
  return (
    <>
      <Header />
      <SearchProduct />
      <div className="container mx-auto flex flex-col md:flex-row md:max-h-[440px] mb-6">
        <AddProduct />
        <DisplayStock />
      </div>
    </>
  );
}
