
module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        name : DataTypes.STRING,
        description : DataTypes.STRING,
        value : DataTypes.DECIMAL(10,2),
        img_product : DataTypes.STRING,
        restaurant_id : DataTypes.INTEGER 
    }, {
        tableName : 'menu', 
        timestamps : false
    })
    Menu.associate = (models) => {
    Menu.belongsTo(models.Restaurant, {
            foreignKey : 'restaurant_id',
            as : 'restaurant'
        })
    }
    return Menu
}