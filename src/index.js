const venom = require('venom-bot');
const database = require("./database");
const stages = require("./stages");


// let resp = stages.step[getStage("5511945584838@c.us")].obj.execute();
// for (let index = 0; index < Array(resp).length; index++) {
//     const element = Array(resp)[index];
//     console.log(element);

// }


venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from,message.body);
    for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from,element)
            .then((result) => {
                console.log('Resultado: ', result); 
            })
            .catch((erro) => {
                console.error('Erro ao enviar: ', erro); 
            });
    }   
  });
}

function getStage(user){
    return database.db[user].stage;
}