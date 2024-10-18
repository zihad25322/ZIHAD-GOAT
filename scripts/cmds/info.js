const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const botName = "Loid Bot";
    const botPrefix = "$";
    const authorName = "Loid Butter";
    const authorFB = "https://www.facebook.com/profile.php?id=100082741664058";
    const authorInsta = "";
    const status = "hi, crush ko po kayong lahat";

    const urls = JSON.parse(fs.readFileSync('loid.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Manila');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    message.reply({
      body: `===「 Bot & Owner Info 」===\n❏Bot Name:𝐁𝐀𝐘𝐉𝐈𝐃☘︎𝐊𝐎𝐎𝐊𝐈𝐄 ${botName}\n❏Bot Prefix:☞︎︎︎.☜︎︎︎ ${botPrefix}\n❏Name:𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐁𝐀𝐘𝐉𝐈𝐃 ${authorName}\n❏Facebook:https://www.facebook.com/BAYJID.500K?mibextid=ZbWKwL ${authorFB}\n❏Instagram:https://www.instagram.com/mr_bayjid120?mibextid=ZbWKwL ${authorInsta}\n❏Status:𝐒𝐈𝐍𝐆𝐋𝐄 ${status}\n❏Date: ${date}\n❏Time: ${time}\n❏Uptime: ${uptimeString}\n=====================`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};
