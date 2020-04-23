const { rastro } = require("rastrojs");
const log = require("./logController");

exports.getTrack = async function (code) {
  var track = await rastro.track(code);
  var data = new Date()
  if (track[0].isInvalid) {
    track = [
      {},
    ];
  }

  log.saveLog(Object.keys(track).length === 0 && track.constructor === Object);

  return track;
};
