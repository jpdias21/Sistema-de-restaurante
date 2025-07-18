
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name : DataTypes.STRING,
        surname : DataTypes.STRING,
        email : DataTypes.STRING,
        phone : DataTypes.STRING,
        password : DataTypes.STRING
    }, {
        tableName: 'user_profile',
        timestamps : false
    })

    User.associate = (models) => {
        User.hasMany(models.Restaurant, {
            foreignKey : 'user_id',
            as : 'restaurant'
        })
    }

    return User
}