require('dotenv').config()
const bcrypt = require('bcrypt')
const db = require('../../../models')
const User = db.User

exports.CreateAccount = async (request, response) => {
    try {
        const {name, surname, email, phone, password } = 
        request.body
        const hashedPassWord = await bcrypt.hash(password, 10)

        const createProfile = await User.create({
            name, surname, email, phone, password : hashedPassWord
        })

        response.status(200).json({mensagem : 'usuario criado com sucesso', createProfile})
    } catch (error) {
        response.status(500).json({mensagem : 'erro ao criar o usuario', error})   
    }
}


