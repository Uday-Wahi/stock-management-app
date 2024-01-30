import { MongoClient } from "mongodb";

let client;

export const connectToMongo = async () => {
  if (!client) {
    // Replace the uri string with your connection string.
    const uri = process.env.Mongo_Conn_Str;
    // Create the client object
    client = new MongoClient(uri, {});
    // Event Listeners
    client.on("connectionReady", (e) => console.log("connection Ready", e));
    client.on("connectionClosed", (e) => console.log("connection closed", e));
    // Establish the connection to mongodb
    await client.connect();
  }
  return client;
};
