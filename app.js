const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

//create server
app.use(express.static(path.join(__dirname, 'src')))

//Handle 404 not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'))
})

app.listen(PORT, () => console.log(`Server running on Port ${PORT}.`))