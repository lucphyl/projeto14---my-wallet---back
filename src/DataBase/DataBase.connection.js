import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoC  = new MongoClient(process.env.DATABASE_URL)
try {
    await mongoC.connect()
    console.log("mongo tá on");

} catch (error) {
    console.log(error.message);
}
export const db = mongoC.db();
