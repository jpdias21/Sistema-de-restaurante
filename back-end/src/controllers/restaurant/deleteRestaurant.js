const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.deleteRestaurant= async (request, response) => {
    
    try {
        const userId = request.userId;

        const deleted = await Restaurant.destroy({where : {user_id : userId}})
        if(deleted === 0) {
            return response.status(404).json({mensagem: 'Restaurante não encontrado'})
        }

        response.status(200).json({mensagem : 'Restaurante deletado', deleted})

    } catch (error) {
        
        response.status(500).json({mensagem : 'Deu erro ao apagar o restaurante', error})
    }
}


