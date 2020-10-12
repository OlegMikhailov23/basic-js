let currentDepth = 1;
let result = 1;
let help = [];

class DepthCalculator {
    calculateDepth(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].constructor === Array) {
                currentDepth++;
                calculateDepth(arr[i]);
                if (i <= arr.length-1) {
                    result = 0
                    if (result > currentDepth) {
                    } else {
                        result = currentDepth;
                        currentDepth = 1;
                    }
                }
            }
        }
        help.push(result);
        help.sort((a, b) => {
            return a - b;
        })
        console.log(help[help.length - 1])
        return help[help.length - 1]
    }
}

const depthCalc = new DepthCalculator();
const {calculateDepth} = depthCalc;
calculateDepth([[[[[]]]]]);


