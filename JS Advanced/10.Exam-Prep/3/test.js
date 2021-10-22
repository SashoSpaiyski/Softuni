const { expect } = require('chai');
const numberOperations = require('./numbers');

describe('Tests', ()=>{
    describe('first method', ()=>{
        it('should return correct power of num', ()=>{
            expect(numberOperations.powNumber(3)).to.equal(9);
            expect(numberOperations.powNumber(1.5)).to.equal(2.25);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
        })
    })
    describe('second method', ()=>{
        it('should return correct output', ()=>{
            expect(numberOperations.numberChecker(50)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(99)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(-5)).to.equal("The number is lower than 100!");
            expect(numberOperations.numberChecker(100)).to.equal("The number is greater or equal to 100!");
            expect(numberOperations.numberChecker(101)).to.equal("The number is greater or equal to 100!");
        })
        it('should throw error when passed wrong input', ()=>{
            expect(numberOperations.numberChecker.bind(('str'))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind((undefined))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind((NaN))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind(([]))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind(({}))).to.throw('The input is not a number!');
        })
    })
    describe('third method', ()=>{
        it('should return correct array', ()=>{
            expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal([2,4,6]);
            expect(numberOperations.sumArrays([1,2],[1,2,3])).to.deep.equal([2,4,3]);
            expect(numberOperations.sumArrays([1,2,3],[2,3])).to.deep.equal([3,5,3]);
        })
    })
})