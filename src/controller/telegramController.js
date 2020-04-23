const fs = require('fs');
const telegram = require("node-telegram-bot-api");
const token = "1178083105:AAERKRvwMKP2ZJcaelOPhJarfyGYOLVWvdA";

const bot = new telegram(token, { polling: true });
var sendFlag = false;
var sendTimestamp=0;

bot.on("text", (msg) => {
  if (msg.text === "getlog") {
    const today = new Date();
    const dateString = `${today.getDate()}-${
      today.getMonth() + 1
    }-${today.getFullYear()}`;
    
  }
});

bot.on('polling_error', (error) => {
  const today = new Date();
  const dateString = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  if(!sendFlag){
    sendFlag=true;
    this.sendTelegramWarn();
    sendTimestamp = new Date();
  }
  if(today.getDate() === sendTimestamp.getDate()){
    if(today.getHours() === sendTimestamp.getHours()+2){
      sendFlag=false;
    }
  }else{
    sendFlag=false;
  }
});

exports.sendWarn = () => {
  bot.sendMessage(1012984034, "Erro em uma consulta a api");
};

exports.sendTelegramWarn = () => {
  bot.sendMessage(1012984034, "Algo errado com o telegram");
};