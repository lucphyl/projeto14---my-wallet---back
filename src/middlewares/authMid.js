import { db } from "../DataBase/DataBase.connection.js"

export async function authValidate (request,response, next) {
    const {authorization} = request.headers
    const token = authorization?.replace("Bearer", "")
    if (!token) return response.sendStatus(401)

    try{
        const session = await db.collection("sessions").findOne({token})
        if (!session) return  response.sendStatus(401)

        response.locals.session = session

        next()

    } catch (error){
        response.status(500).send(error.message)
    }
}