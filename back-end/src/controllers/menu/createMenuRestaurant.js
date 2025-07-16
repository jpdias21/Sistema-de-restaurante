const db = require('../../../models/')
const Menu = db.Menu


exports.createMenu = async (request, response) => {
    try {
        const {name,description,value,img_product,restaurant_id} = request.body

        const create = await Menu.create({
            name,description,value,img_product,restaurant_id
        })

        response.status(200).json({mensagem : 'menu criado com sucesso', create})
    } catch (error) {
        response.status(500).json({mensagem: 'deu erro', error})
    }
}