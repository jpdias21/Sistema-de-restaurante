const express = require('express')
const PORT = 3000
const app = express()
const cors = require('cors')
/////aqui começa

app.use(cors({
    origin : 'http://localhost:5173'
}))
app.use(express.json())

const {CreateAccount} = require ('./controllers/auth/createAccountController')
const {LoginController} = require('./controllers/auth/loginController')

app.post('/cadastro', CreateAccount)

app.post('/login', LoginController)


app.listen(PORT, () => {
    console.log('Servidor iniciado')
})