const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res= {};
  res.turns = 2 ** disksNumber - 1;
  let turnPerSecond = turnsSpeed / 60 / 60;
  res.seconds = Math.floor(res.turns / turnPerSecond);
  return res
};
