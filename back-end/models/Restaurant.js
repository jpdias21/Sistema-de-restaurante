

module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant', {
        name : DataTypes.STRING,
        category : DataTypes.STRING,
        description : DataTypes.STRING,
        cep : DataTypes.STRING,
        address : DataTypes.STRING,
        number_address : DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        user_id : {
            type : DataTypes.INTEGER,
            field: 'user_id'
        }
    }, {
        tableName: 'restaurant',
        timestamps: false
    })

    Restaurant.associate = (models) => {
        Restaurant.belongsTo(models.User), {
            foreignKey : 'user_id',
            as : 'user_profile'
        }
    }

    Restaurant.associate = (models) => {
        Restaurant.hasMany(models.Menu), {
            foreignKey : 'restarant_id',
            as : 'menu' 
        }
    }
    return Restaurant
}