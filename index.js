const { Client, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");
const client = new Client({});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log(
    "O Wpp-Sticker está pronto 😋 Não esquece da estrelinha no repo ⭐"
  );
});

client.on("message_create", (msg) => {
  const command = msg.body.split(" ")[0];
  // Cola seu número onde tem o 84848484, sem o 9
  const sender = msg.from.includes("96304644") ? msg.to : msg.from;
  if (command === "/fig") {
    generateSticker(msg, sender);
  } 
  
  // else {
  //   msg.reply("❌ codigo desconhecido, tente /fig");
  // }

});

client.initialize();

const generateSticker = async (msg, sender) => {
  if (msg.type === "image") {
    try {
      const { data } = await msg.downloadMedia();
      const image = await new MessageMedia("image/jpeg", data, "image.jpg");
      await client.sendMessage(sender, image, { sendMediaAsSticker: true });
    } catch (error) {
      msg.reply("❌ Erro ao processar imagem");
    }
  } else {
    msg.reply("❌ este objeto não parece ser uma imagem");
  }
};

// const generateSticker = async (msg, sender) => {
//   if(msg.type === "image") {
//       try {
//           const { data } = await msg.downloadMedia()
//           const image = await new MessageMedia("image/jpeg", data, "image.jpg")
//           await client.sendMessage(sender, image, { sendMediaAsSticker: true })
//       } catch(e) {
//           msg.reply("❌ Erro ao processar imagem")}
//       }
// // import { create } from "venom-bot";
// // import pkg from "whatsapp-web.js";
// // const { MessageMedia } = pkg;

// // create({
// //   session: "chat-Sticker",
// //   multidevice: true,
// // })
// //   .then((client) => start(client))
// //   .catch((erro) => {
// //     console.log(erro);
// //   });

// // const commands = (client, message) => {
// //   const command = message.body.split(" ")[0];
// //   console.log("message.text", message.text);
// //   console.log("command", command);

// //   const iaCommands = {
// //     sticker: "/fig",
// //     img: "/img",
// //     gpt: "/bot",
// //   };

// //   if (command === "/fig" || message.text == "/fig") {
// //     const sender = message.from.includes("96304644")
// //       ? message.to
// //       : message.from;

// //     generateSticker(message, sender);
// //   } else {
// //     message.reply("❌ Erro:codigo nao encontrado ");
// //   }

// //   // switch (command) {
// //   //   case iaCommands.sticker:
// //   //     const sender = message.from.includes("96304644")
// //   //       ? message.to
// //   //       : message.from;
// //   //     generateSticker(message, sender);

// //   //     break;
// //   // }

// //   // let firstWord = message.text.substring(0, message.text.indexOf(" "));
// //   // console.log("firstWord", firstWord);
// // };

// // async function start(client) {
// //   console.log("startou");
// //   client.onAnyMessage((message) => commands(client, message));
// //   // console.log("client", client);
// //   // console.log("message", message);
// // }

// // const generateSticker = async (message, sender) => {
// //   console.log("message", message);
// //   console.log("sender", sender);
// //   if (message.type === "image") {
// //     try {
// //       const { data } = await message.downloadMedia();
// //       const image = await new MessageMedia("image/jpeg", data, "image.jpg");
// //       await client.sendMessage(sender, image, { sendMediaAsSticker: true });
// //     } catch (error) {
// //       console.log("error", error);
// //       message.reply("❌ Erro ao processar imagem");
// //     }
// //   }
// // }
