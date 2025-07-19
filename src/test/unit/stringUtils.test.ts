import { describe, it, expect, test } from "vitest";
import { uppercase, capatalize, lowercase, reverse } from "../../stringUtil";

describe('string utils testing ', () => {
    test('string munipulation', () => {
        expect(uppercase('hello')).toBe('HELLO')
        expect(lowercase('HELLO')).toBe('hello')
        expect(reverse('hello')).toBe('olleh')
        expect(capatalize('hello')).toBe('Hello')
    })
}) 
