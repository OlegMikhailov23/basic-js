const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let tempArr = [];
    let tempStr = '';

    !options.separator ? options.separator = '+' : '';

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
        options.additionSeparator = '';
    }

    if (typeof str !== 'string' && typeof options.addition !== 'string') {
        str = String(str) + '';
        options.addition = String(options.addition) + '';
    }

    for (let i = 0; i < options.repeatTimes; i++) {
        i === options.repeatTimes - 1 ? options.separator = '' : ''
        !options.additionRepeatTimes ? options.additionRepeatTimes = 1 : '';
        let aditionAndSep = '';
        for (let j = 0; j <= options.additionRepeatTimes - 1; j++) {
            if (j === options.additionRepeatTimes -1) {
                aditionAndSep += (options.addition ? options.addition : '')
            } else {
                aditionAndSep += (options.addition ? options.addition : '') + (options.additionSeparator ? options.additionSeparator : '')
            }
        }
        tempStr = str + aditionAndSep + (options.separator ? options.separator : '');
        tempArr.push(tempStr);
    }


    return tempArr.join('')
};
