import { describe, it, expect, test } from "vitest";
import { sum, divided, multiply, subtract } from "../../mathUtil";



describe('sum()', () => {
    it('@param 4 and 4 =>@return must be 8 ', () => {
        expect(sum(4, 4)).toBe(8)
    })
});

describe('subtract()', () => {
    it('@param 4 and 4 =>@return must be 0 ', () => {
        expect(subtract(4, 4)).toBe(0)
    })
});


describe('multiply()', () => {
    it('@param 4 and 4 =>@return must be 16 ', () => {
        expect(multiply(4, 4)).toBe(16)
    })
});

test('@param 4 and 2 =>@return must be 2', () => {
    expect(divided(4, 2)).toBe(2)
})


describe('mathUtils unit testing', () => {
    test('two number with math basic arathematics ...', () => {
        expect(sum(5, 5)).toBe(10);
        expect(subtract(5, 5)).toBe(0);
        expect(divided(5, 5)).toBe(1);
        expect(multiply(5, 5)).toBe(25);
    });
    it('should be my only one is ', () => {
        // expect('not').toBe('you')
    })
})
