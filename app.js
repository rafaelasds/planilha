require('dotenv/config')
const express = require('express')

const TransacoesRepositorio = require("./infra/sql-transacoes-repositorio")

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = await repositorio.listarTransacoes()
    res.send(transacoes)
})
app.post('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = req.body
    await repositorio.criarTransacao(transacao)
    res.status(201).send(transacao)
})


app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
})