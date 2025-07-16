const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.deleteRestaurant= async (request, response) => {
    
    try {
        const {id} = request.body

        const deleted = await Restaurant.destroy({where : { id }})

        response.status(200).json({mensagem : 'Restaurante deletado', deleted})

    } catch (error) {
        
        response.status(500).json({mensagem : 'deu erro', error})
    }
}


