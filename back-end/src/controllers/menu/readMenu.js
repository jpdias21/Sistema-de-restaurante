const db = require('../../../models/')
const Menu = db.Menu

exports.readMenu= async (request, response) => {
    try {
        const userId = request.userId
        const read = await Menu.findAll({
            include : {
                model : db.Restaurant ,
                as : 'restaurant',
                where : {'user_id' : userId},
                attributes : []
            },
            attributes : ['name', 'description', 'value', 'img_product']
        })

        response.status(200).json({mensagem : 'Menu lido com sucesso', read})
    } catch (error) {
        response.status(500).json({mensagem: 'deu erro', error})
    }
}