import { ConnectToDb } from "./mongo-db";

export async function getAll(collection) {
  let mongoClient;

  try {
    mongoClient = await ConnectToDb();
  } catch (error) {
    return { message: "try again later" };
  }

  const db = await mongoClient.db();
  const documents = await db.collection(collection).find().toArray();
  return documents;
}
