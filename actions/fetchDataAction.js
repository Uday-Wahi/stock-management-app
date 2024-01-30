"use server";

import { connectToMongo } from "@/lib/db";

export const fetchData = async () => {
  const client = await connectToMongo();
  const database = client.db("stock").collection("inventory");
  const displayData = await database.find().toArray();

  if (!displayData) throw new Error("Error fetching product");

  return displayData;
};
