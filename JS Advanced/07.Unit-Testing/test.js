const { expect } = require('chai');
const { mathEnforcer } = require('./function');

describe('Test MathEnforcer', () => {
    describe('Test addFive', () => {
        it('return undefined', () => {
            expect(mathEnforcer.addFive('patka')).to.be.undefined;
        })

        it('return correct', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
        })
    })

    describe('Test subtractTen', () => {
        it('return undefined', () => {
            expect(mathEnforcer.subtractTen('patka')).to.be.undefined;
        })

        it('return correct', () => {
            expect(mathEnforcer.subtractTen(5.5)).to.be.closeTo(-4.5, 0.01);
            expect(mathEnforcer.subtractTen(-6)).to.equal(-16);
        })
    })

    describe('Test sum', () => {
        it('return undefined', () => {
            expect(mathEnforcer.sum('patka', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, 'patka')).to.be.undefined;
            expect(mathEnforcer.sum('patka', 'shmatka')).to.be.undefined;
        })

        it('return correct', () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
            expect(mathEnforcer.sum(-6, -3)).to.equal(-9);
        })
    })
})