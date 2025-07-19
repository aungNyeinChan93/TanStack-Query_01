import { test, expect, it, describe } from 'vitest'

const sum = (a: number, b: number) => {
    return a + b;
};

const greet = (name: string): string => {
    return `Hello ${name}`
}

test('testing sum funtion :@param 1 and 2 ,@return 3', () => {
    expect(sum(1, 2)).toBe(3)
});

describe('overall unit testing', () => {
    it('add two number ->@ return result', () => {
        expect(sum(3, 3)).toBe(6)
    })
    it('other test', () => {
        expect(sum(5, 5)).toBe(10)
    })
    it('should be greeting return . . .', () => {
        expect(greet('aung')).toBe('Hello aung')
    })
})







