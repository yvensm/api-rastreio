const fs = require("fs");
const telegram = require('./telegramController');

exports.saveLog = success => {
  const today = new Date();
  const dateString = `${today.getDate()}-${today.getMonth() +
    1}-${today.getFullYear()}`;
  const timeString = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  let text = "";

  if (!success) {
    text = `${timeString}--Sucesso\n`;
  } else {
    text = `${timeString}--Erro\n`;
}
  fs.appendFile(`./logs/log-${dateString}.txt`, text, function(err, file) {
    if (err) throw err;
  });
};
