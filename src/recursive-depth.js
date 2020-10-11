const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {

  constructor() {
    this.currentDepth = 1;
    this.result = 1;
  }

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].constructor === Array) {
        this.currentDepth ++;
        console.log(this.currentDepth)
        this.calculateDepth(arr[i]);
        if (i === arr.length - 1) {
          if (this.result > this.currentDepth) {
          } else {
            this.result = this.currentDepth;
            this.currentDepth = 1;
          }
        }
      }
    }
    console.log(this.result);
    return this.result
  }
};
