const responseErrorData = (error) => {
    const { name } = error
    switch (name) {
        case 'ValidatorError':
            return {
                status: 422,
                message: error.message,
                errors: error.errors
            }
        case 'CastError':
            return {
                status: 400,
                message: error.message,
                errors: {}
            }
        case 'ValidationError':
            return {
                status: 400,
                message: error.message,
                errors: error.errors
            }
        default:
            return {
                status: 500,
                message: error.message || 'Something went wrong',
                errors: {}
            }
    }
}

module.exports = responseErrorData