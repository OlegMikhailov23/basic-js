const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {

    constructor() {
        this.currentDepth = 1;
        this.result = 1;
        this.collectionOfResults = [];
    }

    calculateDepth(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].constructor === Array) {
                this.currentDepth ++;
                this.calculateDepth(arr[i]);
                if (i <= arr.length-1) {
                    this.result = 0
                    if (this.result > this.currentDepth) {
                    } else {
                        this.result = this.currentDepth;
                        this.currentDepth = 1;
                    }
                }
            }
        }
        this.collectionOfResults.push(this.result);
        this.collectionOfResults.sort((a, b) => {
            return a - b;
        })
        return this.collectionOfResults[this.collectionOfResults.length - 1]
    }
};

