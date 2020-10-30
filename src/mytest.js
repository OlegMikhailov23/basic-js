
const repeater = (str, options) => {
    let tempArr = [];
    let tempStr = '';
    !options.separator ? options.separator = '+' : '';
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
        options.additionSeparator = '';
    }
    // !options.addition ? options.additionSeparator = '|' : '';
    // if (options.addition && !options.additionSeparator) {
    //     options.additionSeparator = '|';
    // }
    console.log(options.repeatTimes);
    for (let i = 0; i < options.repeatTimes; i++) {

        if (options.additionRepeatTimes < 0) {
            options.additionSeparator = '+';
            options.addition = '';
        }
        if (i === options.repeatTimes - 1) {
            options.separator = '';
        }
        tempStr = str + (options.addition ? options.addition : '') + (options.additionSeparator ? options.additionSeparator : '') + (options.separator ? options.separator : '');
        tempArr.push(tempStr);
    }
    console.log(tempArr.join(''))
};

repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' });

// TESTstrADD!

