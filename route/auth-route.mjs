import express from "express"
import { allUsers, newUser } from "../controller/auth-controller.mjs"

const Router = express.Router()

Router.get("/", allUsers)
Router.post("/", newUser)

export default Router
