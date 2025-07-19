/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from "vitest";

const fetchbyUserId = async (id?: any) => {
    if (!id) {
        return Promise.reject('user id not found')
    }
    return Promise.resolve({ id, name: 'username' })
};


describe('fetchByUserId', () => {
    it('should be return user object', async () => {
        expect(await fetchbyUserId(3)).toEqual({ id: 3, name: 'username' })
    })
    it('should be promise reject return', async () => {
        expect(await fetchbyUserId).rejects.toBe('user id not found')
    })
})