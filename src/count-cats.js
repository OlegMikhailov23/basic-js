const CustomError = require("../extensions/custom-error");



module.exports = function countCats(backyard) {
  const catEyes = '^^';
  let countCat = 0;
  for (let i = 0; i < backyard.length; i++) {
    backyard[i].forEach(function (it) {
      it === catEyes ? countCat++ : '';
    })
  }
  return countCat
  };
