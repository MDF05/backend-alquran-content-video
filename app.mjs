import "./model/connect.mjs"

import express from "express"
import createError from "./utils/createError.mjs"
import authRoute from "./route/auth.mjs"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded())

app.use("/auth", authRoute)

app.use("/", (req, res, next) => {
    return next(createError(404, "page not found"))
})

app.use((err, req, res, next) => {
    const status = err.status || 404
    const message = err.message || "something went wrong"

    res.json({
        succes: false,
        status,
        message,
    })
})

app.listen(port, () => console.log(`your app listening on http://localhost:${port}`))
