const db = require('../../../models/')
const Menu = db.Menu

exports.deleteMenu= async (request, response) => {
    
    try {
        const restaurant_id = request.params.restaurant_id

        const deleted = await Menu.destroy({where : { restaurant_id }})

        response.status(200).json({mensagem : 'MENU DELETADO COM SUCESSO', deleted})

    } catch (error) {
        console.log(error)
        response.status(500).json({mensagem : 'deu erro', error})
    }
}


