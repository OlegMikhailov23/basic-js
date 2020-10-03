const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let arrCopy = arr;
    for (let i = 0; i <= arrCopy.length; i++) {
        if (arrCopy[i] === `--discard-next`) {
            arrCopy.splice(arrCopy.indexOf('--discard-next'), 2);
        } else if (arrCopy[i] === `--discard-prev`) {
            if (arrCopy.indexOf('--discard-prev') === 0) {
                arrCopy.splice(arrCopy.indexOf('--discard-prev'), 1)
            } else {
                arrCopy.splice((arrCopy.indexOf('--discard-prev')) -1, 2);
            }
        } else if (arrCopy[i] === `--double-prev`) {
            if (arrCopy.indexOf('--double-prev') === 0) {
                arrCopy.splice(arrCopy.indexOf('--double-prev'), 1)
            } else {
                arrCopy[arrCopy.indexOf('--double-prev')] = arrCopy[(arrCopy.indexOf('--double-prev')) -1];
                arrCopy.splice(arrCopy.indexOf('--double-prev'), 0);
            }
        } else if (arrCopy[i] === `--double-next`) {
            if (arrCopy.indexOf('--double-next') === arrCopy.length -1) {
                arrCopy.splice(arrCopy.indexOf('--double-next'), 1);
            } else {
                arrCopy[arrCopy.indexOf('--double-next')] = arrCopy[(arrCopy.indexOf('--double-next')) + 1];
            }
        }
    }
    return arrCopy
};
