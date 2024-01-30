"use server";

import { connectToMongo } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const handleSubmit = async (formData) => {
  const productForm = {
    slug: formData.get("slug"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
  };

  const client = await connectToMongo();
  const check = client
    .db("stock")
    .collection("inventory")
    .insertOne(productForm);
  if (!check) throw new Error("Error submitting product");
  revalidatePath("/");
};
