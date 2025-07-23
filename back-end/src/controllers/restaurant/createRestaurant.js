
const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.createRestaurant = async (request, response) => {

    try {
        
        const {name,category,description,cep,address,number_address,neighborhood,user_id} =
        request.body 

        const create = await Restaurant.create({
            name,category,description,cep,address,number_address,neighborhood,user_id
        })

        response.status(200).json({mensagem : 'dados do restaurante criado com sucesso', create})

    } catch (error) {
        response.status(500).json({mensagem : 'erro ao criar', error})
    }
}




