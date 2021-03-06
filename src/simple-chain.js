const CustomError = require("../extensions/custom-error");

const chainMaker = {
    res: [],
    getLength() {
        return this.res.length
    },
    addLink(value) {
        if (value === undefined) {
            value = ' ';
        }
        this.res.push(`( ${value} )`);
        return this
    },
    removeLink(position) {
        if (position % 1 == 0) {
            this.res.splice(position - 1, 1);
            return this
        } else {
            this.res = [];
            throw new Error('Wrong value of remove position');
        }
    },
    reverseChain() {
        this.res.reverse()
        return this
    },
    finishChain() {
        let resCopy = this.res.slice();
        this.res = [];
        return resCopy.join('~~');
    }
};


module.exports = chainMaker;
