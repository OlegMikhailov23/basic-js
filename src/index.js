let currentDepth = 1;
let result = 1;
class DepthCalculator {

    calculateDepth(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].constructor === Array) {
                currentDepth++
                if (i === arr.length - 1) {
                    if (result > currentDepth) {
                        console.log('привет')
                    } else {
                        result++
                        currentDepth = 1;
                    }
                }
                calculateDepth(arr[i])
            }
        }
        console.log(result);
        return result
    }

}

const depthCalc = new DepthCalculator();
const { calculateDepth } = depthCalc;
calculateDepth([1, 2, 3, [1], [[[],[[[[[]]]]],[]],4], 5, [1]]);


