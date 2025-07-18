require('dotenv').config()
const JWT = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET



module.exports = function (request, response, next){
    const authHeader = request.headers.authorization
    console.log('Auth Header:', authHeader) 
    console.log('SECRET:', SECRET)

    if(!authHeader){
       return response.status(401).json({mensagem: 'Token ao enviado'})
    }

    const token = authHeader.split(' ')[1]
    console.log('Token extraído:', token)

    // Verificar se o token foi extraído corretamente
    if(!token){
        return response.status(401).json({mensagem: 'Token malformado'})
    }

    JWT.verify(token, SECRET ,(error, decode) =>{
        if(error){
           return response.status(401).json({mensagem : 'Token invalido ou inspirado', error : error.message})
        }

        request.usuario= decode
        request.userId = decode.id
        next()
    }
    )
}