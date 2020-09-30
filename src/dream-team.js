const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let firstLatterCollection = [];
    members.forEach((it) => {
      if (typeof it === 'string') {
        it = it.replace(/\s+/g, '')
        firstLatterCollection.push(it[0].toUpperCase());
      }
    });

    return firstLatterCollection.sort().join('').trim();
  } else {

    return false
  }
};
