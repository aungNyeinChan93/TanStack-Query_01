import { describe, it, expect, test } from "vitest";
import { sum, divided, multiply, subtract, addNumber, totalValue, getOddNumber } from "../../mathUtil";

const firstName = 'aung';
const lastName = 'nyein chan';

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

    test('when divided by zero ', () => {
        expect(() => divided(5, 0)).toThrow('Can not divide by 0');
    })
})

test('addNumber array', () => {
    expect(addNumber(1, 2, 2, 3, 4, 54)).toEqual([1, 2, 2, 3, 4, 54]);
})


it('name should be aung', () => {
    expect(firstName).toBe('aung');
})
it('should be fullName is aung nyein chan ', () => {
    expect(`${firstName} ${lastName}`).toBe('aung nyein chan')
})


// AAA patern
it(' full bio ', () => {

    // arrange
    const name = 'chan';
    const age = 31;
    const gender = 'male';

    // action
    const fullBio = (name: string, age: number, gender: string): string =>
        `My name is ${name},I am ${age} years old.Gender -${gender}`

    // assert
    expect(fullBio(name, age, gender)).toBe('My name is chan,I am 31 years old.Gender -male');
})


it('return get to total value ', () => {
    expect(totalValue(5, 5, 5)).toBe(15)
})

it('add number return should be even number', () => {
    expect(getOddNumber(1, 2, 3, 4, 5, 6, 7)).toEqual([1, 3, 5, 7])
})

test('testing not to be ', () => {
    const name = 'haha';
    expect(name).not.toBe('555')
})


