const menu = require('../menu');
const database = require('../database');

function execute(user, msg){

    let option = "                    SERVIÇOS \n\n";

    Object.keys(menu.option).forEach((value) => {
        let element = menu.option[value];
        option += `${value} - ${element.description}\nR$${element.price} \n`;
    })

    database.db[user].stage = 1;

    return ["Bem-vindo a Assistente Virtual da SR Costura & Bordados! Digite uma das opções abaixo referente ao serviço que deseja:", option];
}



exports.execute = execute;
