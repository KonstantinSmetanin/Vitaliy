const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const t = require('./routes/thing')

const PORT = process.env.PORT || 3000

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(t)

async function start() {
    try{
        await mongoose.connect(
            'mongodb+srv://Kostik:Kostik322@cluster0.7qgex.mongodb.net/findsmtn', 
            {
            useNewUrlParser: true,
            }
        )
        .then(() => {
            app.listen(PORT, () => {
                console.log('Server is running...')
            })
        })
    } 
    catch (e) {
        console.log(e)    
    }
}

start()
