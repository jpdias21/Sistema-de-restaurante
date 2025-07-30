
const db = require('../../../models/')
const Menu = db.Menu

exports.createMenu = async (request, response) => {

    try {
        
        const {name,description,value,ima_product, restaurant_id} =
        request.body 
        
        if (!restaurant_id) {
            return response.status(400).json({ mensagem: 'restaurant_id é obrigatório' });
        }

        const create = await Menu.create({
            name,description,value,ima_product, restaurant_id
        })

        response.status(200).json({mensagem : 'dados do Menue criado com sucesso', create})

    } catch (error) {
        response.status(500).json({mensagem : 'erro ao criar', error})
    }
}




