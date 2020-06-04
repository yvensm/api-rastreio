const { rastro } = require("rastrojs");

exports.getTrack = async function (code) {
  var track = await rastro.track(code);
  if (track[0].isInvalid) {
    track = [{}];
  }

  return track;
};
