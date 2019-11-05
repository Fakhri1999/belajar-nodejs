const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const app = express()
const route = require('./routes/index')
const link = require('./routes/link')

const PORT = process.env.PORT || 8000

app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(logger)
app.use(route)
app.use('/link', link)

// app.use(express.static(path.join(__dirname, 'public')))

app.use('/member', require('./routes/members'))

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))