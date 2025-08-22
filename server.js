import express from 'express'

const app = express()

// digo o método http, a rota, request e response
app.get('/usuarios', (req, res) => {
    res.send('Hello World')
})

app.listen(3000) // porta que o servidor vai rodar

////teste