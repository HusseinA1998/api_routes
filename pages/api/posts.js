import axios from "axios";
import { getAll } from "../../helpers/database/functions";

import { ConnectToDb } from "../../helpers/database/mongo-db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const documents = await getAll("posts");
      return res.status(200).json({
        message: "Got it",
        result: documents,
      });
    } catch (error) {
      return res.status(500).json({
        message: "try again later",
        error,
      });
    }
  }

  if (req.method === "POST") {
    let mongoClient;
    const { title, body } = req.body;

    try {
      mongoClient = await ConnectToDb();
    } catch (error) {
      return res.status(500).json({
        message: "try again later",
      });
    }

    try {
      const db = mongoClient.db();
      const result = await db.collection("posts").insertOne({
        title,
        body,
      });
      res.status(201).json({
        message: "Added",
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "try again later",
      });
    }
    mongoClient.close();
  }
};
export default handler;
