
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

    return User
}