const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')))

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

app.get('/auth', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))