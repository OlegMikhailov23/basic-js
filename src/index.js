const chainMaker = {
    res: [],
    getLength() {
        console.log(this.res.length)
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
        console.log(resCopy, resCopy.join('~~'));
        this.res = [];
        return resCopy.join('~~');
    }

};

chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain()
