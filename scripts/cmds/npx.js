const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "npx",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🙂")==0) {
		var msg = {
				body: "আমি জানি  কিছু মানুষ আমাকে..!\n অবহেলা করার মধ্যে মানসিক শান্তি পায়🥀😅\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/JOY/joyefa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
   default:
          return;
      }
    }
  }
};
