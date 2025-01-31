function createError(status = 404, message = "something went wrong" ) {
    const Err = new Error()
    Err.message = message
    Err.status = status

    return Err
}

export default createError