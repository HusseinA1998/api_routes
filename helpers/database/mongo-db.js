import { MongoClient } from "mongodb";

export async function ConnectToDb() {
  const dbClient = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zfaw8.mongodb.net/testingAPI?retryWrites=true&w=majority`
  );
  return dbClient;
}
