const db = require('../../../models/')
const Menu = db.Menu

exports.updateMenu= async (request, response) => {
    
    try {
        const {id, ...dados} = request.body

        const update = await Menu.update(dados, {where : { id }})

        response.status(200).json({mensagem : 'menu atualizado com sucesso', update})

    } catch (error) {
        
        response.status(500).json({mensagem : 'deu erro', error})
    }
}


