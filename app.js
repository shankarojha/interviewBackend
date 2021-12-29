const express = require('express')
const cors = require('cors')

const app = express()
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


/**CORS */

app.use(cors())

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

/** MODEL */
 require('./userModel')

 /** Routers */
const router = require('./router')
router.setRouter(app)


/** Connect */
let port = 3000;
app.listen(port,()=>{
    let db = 'mongodb://127.0.0.1:27017/testInterview'
    mongoose.connect(db)
    console.log("connected at port" + port)
})
