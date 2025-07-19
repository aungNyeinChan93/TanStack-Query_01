import { describe, it, expect } from "vitest";

describe('testing fetch . . ', () => {
    const isResponseOK = async () => {
        const response = await fetch('https://dummyjson.com/quotes');
        return response.ok;
    };

    it('should be instane of promise response ', () => {
        expect(isResponseOK()).toBeInstanceOf(Promise)
    })
});



