const database = require("../database");

function execute(user, msg){

    database.db[user].stage = 0;
       
    return ["Para mais informações ligue para +55 (11) 98936-5310"]; 
}

exports.execute = execute;