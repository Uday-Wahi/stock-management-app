"use client";

import Link from "next/link";
import { dataObject as modal } from "./Modal";

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const StockCard = ({ id, slug, quantity, price }) => {
  return (
    <Link
      href="?showModal=true"
      onClick={() => {
        modal.slug = slug;
        modal.quantity = quantity;
        modal.price = price;
      }}
      scroll={false}
    >
      <div className="flex transform flex-col justify-between rounded-lg bg-white py-1 px-2 sm:p-2 md:p-6 shadow-lg transition-all duration-200 ease-in-out hover:scale-105 h-40">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb md:mb-1 text-indigo-600">
            {truncateString(slug, 25)}
          </h2>
          <p className="text-lg md:text-xl font-medium text-orange-600">{`Quantity: ${quantity}`}</p>
        </div>
        <p className="text-base md:text-lg text-green-500 font-semibold self-end">
          {`Price: ₹${price}`}
        </p>
      </div>
    </Link>
  );
};
export default StockCard;
