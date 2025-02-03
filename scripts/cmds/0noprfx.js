!cmd installe nop.js const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "noprefix",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "mc":
          message.reply({
            body: "খানকির পোলা বকা দাওয়া ভালো না 😠",
            attachment: fs.createReadStream(""),
          });
          await api.setMessageReaction("😡", event.messageID, event.threadID, api);
        break;
case "😭":
          message.reply({
            body: "কান্না করো কেন জান 😞",
            attachment: fs.createReadStream(""),
          });
          await api.setMessageReaction("😓", event.messageID, event.threadID, api);
   case "🙂":
          message.reply({
            body: "ওলে আমার জান পাখি কাছে আসো 🙈😘",
            attachment: fs.createReadStream(""),
          });
          await api.setMessageReaction("😗", event.messageID, event.threadID, api);
case "😡":
          message.reply({
            body: "রাগ করো কেন কি হইছে জান 🥺",
            attachment: fs.createReadStream(""),
          });
          await api.setMessageReaction("☹️", event.messageID, event.threadID, api);
  case "🙄":
message.reply({
body: "এই আমার দিকে তাকাও 🥹 ",
            attachment: fs.createReadStream(""),
          });
          await api.setMessageReaction("😦", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
