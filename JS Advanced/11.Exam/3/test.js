const { expect } = require('chai');
const library = require('./third'); //change the name

describe("Test", function () {
    describe("first method", function () {
        it(' ', () => {
            expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');

        });
        it(' ', () => {
            expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
        });
        it(' ', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw();
        });
        it(' ', () => {
            expect(() => library.calcPriceOfBook('a', 1.1)).to.throw();
        });
        it(' ', () => {
            expect(() => library.calcPriceOfBook()).to.throw();
        });
        it(' ', () => {
            expect(() => library.calcPriceOfBook('a')).to.throw();
        });
        it(' ', () => {
            expect(() => library.calcPriceOfBook(1)).to.throw();
        });
    });

    describe("second method", function () {
        it(' ', () => {
            expect(() => library.findBook([], 'a')).to.throw();
        });
        it(' ', () => {
            expect(library.findBook(['a'], 'b')).to.equal('The book you are looking for is not here!');
        });
        it(' ', () => {
            expect(library.findBook(['a'], 'a')).to.equal('We found the book you want.');
        });
        it(' ', () => {
            expect(() => library.findBook()).to.throw();
        });
        it(' ', () => {
            expect(() => library.findBook('a')).to.throw();
        });
    });

    describe("third method", function () {
        it(' ', () => {
            expect(library.arrangeTheBooks(5)).to.equal("Great job, the books are arranged.");
        });
        it(' ', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it(' ', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
        it(' ', () => {
            expect(() => library.arrangeTheBooks(5.5)).to.throw();
        });
        it(' ', () => {
            expect(() => library.arrangeTheBooks(-5)).to.throw();
        });
    });
});

