const database = require('../database');

function execute(user, msg){

    if(msg == "CANCELAR" || msg == "Cancelar" ){
        database.db[user].stage = 0;
        return ["Solicitação de serviço cancelada 😢"];
    }

    if(msg == "CONFIRMAR" || msg == "Confirmar" ){
        database.db[user].stage = 3;
        return ["Serviço sendo finalizado... ok?"];
    }

    let abstract = "                    RESUMO \n\n";
    let total= 0;

    database.db[user].items.forEach((value) => {

        abstract += `${value.description} - R$${value.price} \n`;

        total += value.price;
    });

    abstract += `\nTotal R$${total}`;

    return [abstract, "Para confirmar digite *CONFIRMA* ou para cancelar digite *CANCELAR*"];

}
exports.execute = execute;