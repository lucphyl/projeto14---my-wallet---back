export function validaSchema (schema) {
    return (request, response, next) => {
        const validação = schema.validate(request.body, {abortEarly: false})

        if (validação.error) {
            const errors = validação.error.details.map(detail => detail.message)
            return response.status(422).send(errors)
        };
        next();
    }
}