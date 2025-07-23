const express = require('express')
const PORT = 3000
const app = express()
const cors = require('cors')
require('dotenv').config()
/////aqui começa

app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use(express.json())

const authMiddleware= require('../middlewares/authMiddlewares')
const {CreateAccount} = require ('./controllers/auth/createAccountController')
const {LoginController} = require('./controllers/auth/loginController')

const {createRestaurant} = require('./controllers/restaurant/createRestaurant')
const {deleteRestaurant} = require('./controllers/restaurant/deleteRestaurant')
const {updateRestaurant} = require('./controllers/restaurant/updateRestaurant')
const {readRestaurant} = require('./controllers/restaurant/readRestaurant')

const {createMenu} = require('./controllers/menu/createMenu')
const {deleteMenu} = require('./controllers/menu/deleteMenu')
const {updateMenu} = require('./controllers/menu/updateMenu')
const {readMenu} = require('./controllers/menu/readMenu')


//authenticator
app.post('/cadastro', CreateAccount)
app.post('/login', LoginController)

///restaurant
app.post('/createRestaurant', createRestaurant)
app.post('/deleteRestaurant', deleteRestaurant)
app.put('/updateRestaurant', authMiddleware,updateRestaurant )
app.get('/readRestaurant', authMiddleware, readRestaurant)

///menu
app.post('/createMenu', createMenu)
app.post('/deleteMenu', deleteMenu)
app.post('/updateMenu', updateMenu)
app.get('/readMenu', authMiddleware, readMenu)






app.listen(PORT, () => {
    console.log('Servidor iniciado')
})