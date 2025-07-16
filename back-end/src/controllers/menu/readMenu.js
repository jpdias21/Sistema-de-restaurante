const db = require('../../../models/')
const Menu = db.Menu

exports.readMenu= async (request, response) => {
    try {
        const user_id = request.usuario.id
        const read = await Menu.findAll({
            include : {
                model : db.Restaurant,
                where : {user_id},
                attributes : []
            },
            attributes : ['name', 'description', 'value', 'img_product'] 
        })

        response.status(200).json({mensagem : 'menu criado com sucesso', read})
    } catch (error) {
        response.status(500).json({mensagem: 'deu erro', error})
    }
}