import { describe, it, expect } from "vitest";

describe('parameter testing', () => {

    const add = (a: number, b: number): number => a + b
    it.each([
        [1, 2, 3], // a , b, reault
        [5, 5, 10],
        [-3, -5, -8],
    ])('should be correct', (a, b, expectResult) => {
        expect(add(a, b)).toBe(expectResult)
    })
})
