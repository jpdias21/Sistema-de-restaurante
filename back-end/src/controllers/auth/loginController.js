require('dotenv').config()
const bcrypt = require('bcrypt')
const db = require('../../../models')
const User = db.User
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET 

exports.LoginController = async (request, response) => {

    try {
        const {email, password} = request.body

        const usuario = await User.findOne({
            where : {email}
        })
        if(! usuario){
             return response.status(401).json({mensage : 'Usuario nao encontrado'})   
            }
        
            const senhaCorreta = await bcrypt.compare(password, usuario.password)
            if(! senhaCorreta){
               return response.status(401).json({mensagem : 'Senha incorreta'})
            } 

            const token = jwt.sign({
             id : usuario.id , name: usuario.name, surname: usuario.surname, email : usuario.email, 
            }, secret,
            {expiresIn : 3600}
        )

        return response.status(200).json({mensagem : 'login feito com sucesso', token})

    } catch (error) {
        response.status(500).json({mensagem : 'deu erro', error})
    }
}