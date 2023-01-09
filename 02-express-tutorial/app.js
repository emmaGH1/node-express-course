const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar-app'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send(`<div><h1>Error!!</h1><br>Page not found</div>`)
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.use