import { create } from "venom-bot";
import pkg from "whatsapp-web.js";
const { MessageMedia } = pkg;

create({
  session: "chat-gpt",
  multidevice: true,
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const commands = (client, message) => {
  const command = message.body.split(' ')[0];
  console.log("message.text", message.text);
  console.log("command", command);




  const iaCommands = {
    sticker: "/fig",
    img: "/img",
    gpt: "/bot",
    
  };
  

  let firstWord = message.text.substring(0, message.text.indexOf(" "));
  console.log("firstWord", firstWord);
};

async function start(client) {
  console.log("startou");
  client.onAnyMessage((message) => commands(client, message));
  console.log("client", client);
  console.log("message", message);
}
