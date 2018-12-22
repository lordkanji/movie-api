const mongoose =require ('mongoose');

module.exports = ()=>{
    mongoose.connect('mongodb://lordkanji:1234567b,@ds151292.mlab.com:51292/project-of-my-movie-api',{ useNewUrlParser: true } );
    mongoose.connection.on('open', ()=>{
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error',(err)=>{
        console.log('MongoDB: Failed',err);
    });
}