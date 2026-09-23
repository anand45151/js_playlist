const mongoose  = require("mongoose")

async function ConnectionDataBase(url){

    return mongoose.connect(url)
    
}

module.exports = {
    ConnectionDataBase,
}