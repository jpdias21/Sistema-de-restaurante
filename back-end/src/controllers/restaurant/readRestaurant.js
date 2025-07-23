const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.readRestaurant= async (request, response) => {
    try {
        const userId = request.userId
        const read = await Restaurant.findOne({
            where : {user_id :userId},
            attributes : ['id','name', 'category', 'description', 'cep', 'address', 'number_address', 'neighborhood']
        })

        response.status(200).json({mensagem : 'Restaurante lido com sucesso', read})
    } catch (error) {
        response.status(500).json({mensagem: 'deu erro', error})
    }
}