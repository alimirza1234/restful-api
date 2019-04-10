var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(express.static('./public'));

var Users = require('./routes/Users')
var Clients = require('./routes/Clients')
var Screens = require('./routes/Screens')
var Roles = require('./routes/Roles')
var Modules = require('./routes/Modules')
var Modulescli = require('./routes/Modulescli')
var Images = require('./routes/Images')


app.use('/users', Users)
app.use('/clients', Clients )
app.use('/screens', Screens )
app.use('/roles', Roles )
app.use('/modules', Modules )
app.use('/modulescli', Modulescli )
app.use('/images', Images )


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
