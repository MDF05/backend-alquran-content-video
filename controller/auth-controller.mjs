import UserModel from "../model/auth-model.mjs"
import createError from "../utils/createError.mjs"

async function allUsers(req, res, next) {
    try {
        const users = await UserModel.find()

        return res.json({ succes: true, data: { users } })
    } catch (err) {
        next(createError(401, err.message))
    }
}

async function newUser(req, res, next) {
    const { username, password } = req.body

    try {
        const user = UserModel({
            username,
            password,
        })

        user.save()

        return res.json({
            succes: true,
            data: {
                message: "user berhasil di simpan",
            },
        })
    } catch (err) {
        next(createError(401, err.message))
    }
}

export { newUser, allUsers }
