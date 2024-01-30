"use client";

import { handleSubmit } from "@/actions/formSubmitAction";
import { useRef, useState } from "react";
import Alert from "./Alert";

const addProduct = () => {
  const form = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container md:flex-1 bg-red-200 rounded-md">
      {showAlert && <Alert message="Product added successfully!" />}
      <h1 className="text-3xl font-bold text-center md:py-4 pt-3">
        Add a Product
      </h1>
      <form
        className="flex flex-col gap-3 md:gap-4 md:p-4 py-2.5 px-4"
        ref={form}
        action={async (formData) => {
          await handleSubmit(formData);
          form.current.reset();
          toggleAlert();
        }}
      >
        <label className="font-bold" htmlFor="slug">
          Slug
        </label>
        <input
          className="border border-gray-300 p-2 rounded-lg"
          type="text"
          name="slug"
          id="slug"
          required={true}
        />
        <label className="font-bold" htmlFor="quantity">
          Quantity
        </label>
        <input
          className="border border-gray-300 p-2 rounded-lg"
          type="number"
          name="quantity"
          id="quantity"
          required={true}
        />
        <label className="font-bold" htmlFor="price">
          Price
        </label>
        <input
          className="border border-gray-300 p-2 rounded-lg"
          type="number"
          name="price"
          id="price"
          required={true}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:scale-105 transform transition-all"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
export default addProduct;
