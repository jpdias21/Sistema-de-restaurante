require('dotenv').config()
const JWT = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET


module.exports = function (request, response, next){
    const authHeader = request.headers.authorization

    if(!authHeader){
       return response.status(401).json({mensagem: 'Token ao enviado'})
    }

    const token = authHeader.split(' ')[1]

    JWT.verify(token, SECRET ,(error, decode) =>{
        if(error){
           return response.status(401).json({mensagem : 'Token invalido ou inspirado'})
        }

        request.usuario= decode
        next()
    }
    )
}