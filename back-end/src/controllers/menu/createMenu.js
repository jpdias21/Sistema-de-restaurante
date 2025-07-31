
const db = require('../../../models/')
const Menu = db.Menu

exports.createMenu = async (request, response) => {

    try {
        
        const {produto, restaurant_id} = request.body 
        console.log('Dados recebidos:', {produto, restaurant_id})
        if (!restaurant_id) {
            return response.status(400).json({ mensagem: 'restaurant_id é obrigatório' });
        }
        if(!produto){
            return response.status(400).json({mensagem : 'o produto deve ser um array'})
        }
        

        const results = []

        for(const item of produto){
            console.log('Processando item:', item) 
            const [create] = await db.sequelize.query(
                'INSERT INTO menu (name, description, value, restaurant_id) VALUES ($1,$2,$3,$4) RETURNING *' , {
                    bind : [item.name,item.description,item.valor,restaurant_id],
                    type : db.sequelize.QueryTypes.SELECT
                }
            
            )
            results.push(create)
        }

        response.status(200).json({mensagem : 'dados do Menue criado com sucesso', results})

    } catch (error) {
        console.error('erro completo', error)
        response.status(500).json({mensagem : 'erro ao criar', error})
    }
}




