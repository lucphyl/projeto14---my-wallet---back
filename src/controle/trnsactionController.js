import dayjs from "dayjs"
import { db } from "../DataBase/DataBase.connection.js"

export async function criaTransação (request,response) {
    const { value, description, type} = request.body
    const {userId} = response.locals.session

    try {
        const transação = {value: Number(value), description, type, userId, date: dayjs().valueOf()}

        await db.collection ("transactions").insertOne(transação)
        response.sendStatus(201)

    }catch (error) {
        response.status(500).send(error.message);
    }

};

export async function pegaTransação (request,response) {
    const {userId} = response.locals.session
    
    try{
        const transactions = await db.collection("transactions").find({userId}).sort({date:-1}).toArray()

        response.send(transactions)
    }
    catch (error) {
        response.status(500).send(error.message);
    }
};