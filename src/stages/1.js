const menu = require('../menu');
const database = require('../database')

function execute(user, msg){

    if(msg == "CANCELAR" || msg == "Cancelar"){
        database.db[user].stage = 0;
        return ["Solicitação de serviço cancelada 😢"];
    }

    if(msg == "CONTINUAR" || msg == "Continuar"){
        database.db[user].stage = 2
        return ["Serviço sendo anotado... ok?"]
    }

    if(!menu.option[msg]){
        return["❌ Número digitado inválido, por favor tente novamente! ❌", 
        "```Digite *CONTINUAR* para finalizar ou *CANCELAR*  para cancelar```"]
        
    };

    database.db[user].items.push(menu.option[msg]);

    return [`${menu.option[msg].description} anotado com sucesso`, "Caso deseje mais um serviço digite o número do serviço desejado, se não digite *CONTINUAR* para finalizar ou *CANCELAR* para cancelar"];
}

exports.execute = execute;
