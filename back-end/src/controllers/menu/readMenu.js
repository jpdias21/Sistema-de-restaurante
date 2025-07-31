const db = require('../../../models/')
const Menu = db.Menu

exports.readMenu= async (request, response) => {
    try {
        const {restaurant_id} = request.params
        const read = await Menu.findAll({

            where : {'restaurant_id' : restaurant_id},
            attributes : ['name', 'description', 'value', 'img_product']
        })

        response.status(200).json({mensagem : 'Menu lido com sucesso', read})
    } catch (error) {
        response.status(500).json({mensagem: 'deu erro', error})
    }
}