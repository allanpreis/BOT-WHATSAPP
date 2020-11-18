const database = require("../database");
const stages = require('../stages')

function execute(user, msg){

    if(msg == "CANCELAR" || msg == "Cancelar" ){
        database.db[user].stage = 0;
        return ["Solicitação de serviço cancelada 😢"];
    }

    if(msg == "FINALIZAR" || msg == "Finalizar" ){
        database.db[user].stage = 4;
        return stages.step[4].obj.execute(user, "");
    }
   
    return ["Endereço para entrega e retirada das roupas: *Rua Doze de Outubro, 325, Shopping 21, box 61 - Lapa, São Paulo - SP, 05073-001*",
    "https://g.page/SR-Costura?share", "Para finalizar digite *FINALIZAR* ou para cancelar digite *CANCELAR*"]; 
}

exports.execute = execute;