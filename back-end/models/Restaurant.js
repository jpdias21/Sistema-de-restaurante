

module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant', {
        name : DataTypes.STRING,
        category : DataTypes.STRING,
        description : DataTypes.STRING,
        cep : DataTypes.STRING,
        address : DataTypes.STRING,
        number_address : DataTypes.STRING,
        user_id : {
            type : DataTypes.INTEGER,
            field: 'user_id'
        }
    }, {
        tableName: 'restaurant',
        timestamps: false
    })
    return Restaurant
}