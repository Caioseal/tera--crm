const Cognito = require("./cognito")

module.exports.signup = async (event) => {
    const requestBody = JSON.parse(event.body)
    const authBusiness = new Cognito()
    await authBusiness.signup(requestBody.user_id, requestBody.email, requestBody.password)
    const response = {
        statusCode: 201,
        body: JSON.stringify({ message: "Usuário criado com sucesso" }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true
        }
    }
    return response
}

module.exports.signin = async (event) => {
    const requestBody = JSON.parse(event.body)
    const authBusiness = new Cognito()
    const AuthenticationToken = await authBusiness.signin(requestBody.user_id, requestBody.password)
    const response = {
        statusCode: 201,
        body: JSON.stringify(AuthenticationToken),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true
        }
    }
    return response
}
