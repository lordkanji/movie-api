const mongoose = reuire ('mongoose');

const Schema =mongoose.Schema;

const MoviesSchema = new Schema({
    title: {

        type: String,
        required:true
    },

    category: String,
    country:String,
    year:NNumber,
    imbd_score: Number
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports= mongoose.model('movie',MoviesSchema);