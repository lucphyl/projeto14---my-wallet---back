import {db} from "../DataBase/DataBase.connection.js"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

export async function signUP (request, response) {
    const { name, email, password} = request.body

    try {
        const user = await db.collection("users").findOne({email})
        if(user) return response.status(409).send("email já está em uso")

        const hash = bcrypt.hashSync(password,10)

        await db.collection("users").insertOne({name, email, password: hash})

        response.sendStatus(201)
    } catch (error) {
        response.status(500).send(error.message)
    }
}

export async function signIN(request, response){
    const {email,password} = request.body

    try{
        const user = await db.collection("users").findOne({email})

        if (!user) return response.status(401).send("email já está em uso")

        const senhaCorreta = bcrypt.compareSync(password,user.password)

        if (!senhaCorreta) return response.status(401).send("senha errada")

        const token = uuid()
        await db.collection("sessions").insertOne({token,userId:user._id})
        response.send({userName: user.name, token})

    } catch (error) {
        response.status(500).send(error.message)
    }
    
}

export async function logOUT(request, response){
    const {authorization} = request.headers
    const token = authorization?.replace("Bearer", "")
    if (!token) return response.sendStatus(401)

    try{
        const sessions = await db.collection("sessions").findOne({token})
        if (!sessions) return  response.sendStatus(401)

        await db.collection ("sessions").deleteOne({token})
        response.sendStatus(200)
    } catch (error){
        response.status(500).send(error.message)
    }
};