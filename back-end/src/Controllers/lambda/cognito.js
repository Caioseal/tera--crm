const AWS = require('aws-sdk')

const cognito = new AWS.CognitoIdentityServiceProvider()

class Cognito {
    async signup(userId, email, password) {
        const params = {
            ClientId: '3cp9co9lj834n5di0qo77uh7p2', //process.env.COGNITO_CLIENT_ID,
            Password: password,
            Username: userId,
            UserAttributes: [
                {
                    Name: 'email',
                    Value: email
                }
            ],
        }
        await cognito.signUp(params).promise()
    }

    async signin(userId, password) {
        const params = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: '3cp9co9lj834n5di0qo77uh7p2', //process.env.COGNITO_CLIENT_ID,
            AuthParameters: {
                USERNAME: userId,
                PASSWORD: password
            },
        }
        const accessKeys = await cognito.initiateAuth(params).promise()
        const response = {
            access_token: accessKeys.AuthenticationResult.IdToken,
            refresh_token: accessKeys.AuthenticationResult.RefreshToken,
            expires_in: accessKeys.AuthenticationResult.ExpiresIn,
            token_type: accessKeys.AuthenticationResult.TokenType,
        }
        return response
    }
}

module.exports = Cognito