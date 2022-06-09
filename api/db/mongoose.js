const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = "mongodb+srv://admin:admin@cluster0.d0lbhcn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Connected to mongodb successfully");

}).catch((e) => {
    console.log("Error while attempting to connect to mongodb ");
    console.log(e);

});

//mongoose.set('userCreateIndex', true);
//mongoose.set('userFindAndModify', false);

module.exports = {
    mongoose
};