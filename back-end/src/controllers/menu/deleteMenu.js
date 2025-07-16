const db = require('../../../models/')
const Menu = db.Menu

exports.deleteMenu= async (request, response) => {
    
    try {
        const {id} = request.body

        const deleted = await Menu.destroy({where : { id }})

        response.status(200).json({mensagem : 'menu deletado', deleted})

    } catch (error) {
        
        response.status(500).json({mensagem : 'deu erro', error})
    }
}


