const express = require("express")
const exhbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exhbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "261106ma*",
    database:"todoapp",
    port: 3306
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})