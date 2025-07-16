const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.updateMenu= async (request, response) => {
    
    try {
        const {id, ...dados} = request.body

        const update = await Restaurant.update(dados, {where : { id }})

        response.status(200).json({mensagem : 'dados do RESTAURANTE atualizado com sucesso', update})

    } catch (error) {
        
        response.status(500).json({mensagem : 'deu erro', error})
    }
}


