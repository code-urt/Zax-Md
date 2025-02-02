const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "255688930205";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxDZ1N4cExYQnhVZWdoN1I2dXAxVk82dVF4TkJtNDRmYmxXNjRoYmtscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXY3VTZuTlh4QXd4TG8zVjFORXVWNWw4MmhWa0QyaTRoTDI2OXpFaGNsbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTFJqQ25BYjJqcllIaXdUMTVSOW8rVWZSa1AxQVpsWTZiaUR1S3h2elVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTFVrMEZ5TlRvaHVNNG5VVFd0YnJRY0JRTGRGUFE3QmhTdHN6Rnl0dEN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCUG1EcElFa29jVksvMXp6OHFXYnN5Ym94L05mSElJWGVEU1RhQ2xTR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErSm4xZ1o3aWhZeVdXK0hxeEp1ajljTkpncVk0MEVDRHc3dFhoUXRHRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENMQTEzbC8xY3ZFSXRML0VlamFva1IzS1krejZJZGhnalRQeHc2R0ttOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHkyYnQ3ekpFODhTcTg4WkhaMm8zYVBUMmRIQVhZYllZVHdUbUJDWFkxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklsekNUYkgySGh4N2tmMXNuUWpuRGlLblFXTDNyNXdzUTUrdlJqaVNsMDl2U2YrWVBHUW1temVaY25NRHBwUDhaODNPL0tKVFgvVmJBNnhHZ0RoWkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6ImNRVDRrUmx6dWRiRzhMVSswdkhNVkd0RG1jVlBvUURXK0t1Nlpmd0I4TU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9hTGVYYjFlU01PamNOd0M0V0FrZkEiLCJwaG9uZUlkIjoiNTUxZDI3MmEtNWQyZS00MWY2LWFhYzctODVmYjNhMzkxMzQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldicUxpcWhMVU44eVI1YlFaT1l1ZWVzSG05TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpM2V5aTBycmdFTHgyMEZXTEM2YjF3TnRsaEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1M5Qk5LOEUiLCJtZSI6eyJpZCI6IjI2MzcxNDMyMDgwMDo2NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPdGhlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW52bjlnQ0VLdlcvN3dHR0RvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ1dxandtMXZmcWJCTUxJMHl3bS9VV3EvRitnRGloaThRTE5sU1RQc0NTdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWQ0RGoxY0txaEwvQnFTWXdFbXNaWDZzQWdma1BHY05JNjZlUENFeld2MkI1Y0JYKzUrMEN6S3BFYk4xTUE3QjNlRjBxckNNY2tPeDUvZm1Rb3E4QkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxMdVF0cE5tU3ZzZnVNOS8zb1pFMXJrek50VUxUUGQrMG85MVZySUJ3TUNOV1ZmU2JkMHViMFJWTW1yM1REbW14aUV6YUtENnk0czBFSEpVRklUTkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MzIwODAwOjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllGcW84SnRiMzZtd1RDeU5Nc0p2MUZxdnhmb0E0b1l2RUN6WlVrejdBa3MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg1MzM2ODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmJtIn0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "MrXhriss",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
