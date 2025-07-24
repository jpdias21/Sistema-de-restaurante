const db = require('../../../models/')
const Restaurant = db.Restaurant

exports.updateRestaurant= async (request, response) => {
    
    try {
        const {id} = request.params;
        const dados = request.body
    
        const update = await Restaurant.update(dados, {where : { id }})
        
        if (update[0] === 0) {
            return response.status(404).json({ mensagem: 'Restaurante não encontrado ou nada foi alterado' });
        }

        response.status(200).json({mensagem : 'dados do RESTAURANTE atualizado com sucesso', update})

    } catch (error) {
        
        response.status(500).json({mensagem : 'Erro ao atulalizar restaurante', error})
    }
}


