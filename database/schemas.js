require('dotenv').config();
const { Schema } = require('mongoose')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const urlSchema = new Schema( {
    original_url:{type:String, required:true},
    short_url:{type:Number, required:true, default:0},
  });



const user = new Schema({
    username:{type:String, required:true}
})

const exercise = new Schema({
    description:{type:String},
    duration:{type:Number, required:true},
    date:{type:Date, default:Date.now()}    
})







const shortURL = mongoose.model("shortURL", urlSchema)

module.exports = shortURL