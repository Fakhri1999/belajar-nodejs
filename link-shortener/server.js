const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const app = express()

const PORT = process.env.PORT || 8000

app.engine('handlebars', hsb({extname:'hbs', defaultLayout: 'template'}))
app.set('view engine', 'handlebars')

// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))