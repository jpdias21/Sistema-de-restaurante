require('dotenv').config()
const JWT = require('jsonwebtoken')
const SECRET = process.env.SECRET


module.exports = function (request, response, next){
    const authHeader = request.header.authorizathio 

    if(!authHeader){
        response.status(201).json({mensagem: 'deu erro no header, nao tem nunhum'})
    }

    const token = authHeader.split('')[1]

    JWT.verify(token, SECRET ,(error, decode) =>{
        if(! error){
            response.status(201).json({mensagem : 'Token invalido ou inspirado'})
        }

        request.usuario= decode
        next()
    }
    )
}