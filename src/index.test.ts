import { divide, multiply, sum } from ".";
import { describe, it, expect} from '@jest/globals'

describe('testing the sum function', () => {
    it('positive numbers sum', () => {
        const result = sum(12,34);
        expect(result).toBe(46);
    })
    it('negative numbers sum', ()=> {
        const result = sum(-1,-3);
        expect(result).toBe(-4);
    })
})

describe('testing the multiply function', () => {
    it('positive numbers multiply', () => {
        const result = multiply(12,34);
        expect(result).toBe(408);
    })
    it('negative numbers multiply', () => {
        const result = multiply(-1,-3);
        expect(result).toBe(3);
    })
})

describe('testing the divide function', () => {
    it('positive numbers divide', () => {
        const result = divide(12,3);
        expect(result).toBe(4);
    })
    it('negative numbers divide', () => {
        const result = divide(-1,-3);
        expect(result).toBe(0.3333333333333333);
    })
    it('divide by zero', () => {
        // expect(() => divide(12,0)).toBe('Cannot divide by zero');
        expect(() => divide(12,0)).toThrow('Cannot divide by zero');
    })
})