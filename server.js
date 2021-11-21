const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bootcamps = require('./router/bootcamps');
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env' })
connectDB()


app.use(express.json())


if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}else{
    app.use(logger)
}
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler)


app.get('/', function(req, res){
    res.send(`Hello, you requested ${req}`)
})







const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

process.on('uncaughtException',(err,promise) => {
    console.error(`Error:${err.message}`)
    server.close(()=>process.exit(1))
})