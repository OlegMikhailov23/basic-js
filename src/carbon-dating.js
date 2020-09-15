const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string') {
      sampleActivity = parseFloat(sampleActivity);
      if (sampleActivity === 0) {

        return false
      }
      const N = Math.log(MODERN_ACTIVITY / sampleActivity);
      const k = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD;
      const datePeriod = (N / k);
      if (datePeriod > 0) {

        return Math.ceil(datePeriod)
      }
    }

    return false
};


