const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: String,
    description: String,
    status: String,
    latitude: Number,
    longitude: Number,
    phonenum: String,
    name: String
},{
    collection: 'info',
    versionKey: false
})

module.exports = model('thingM', schema)