import { compareSync, hashSync, genSaltSync } from 'bcryptjs';
import { describe, it, expect } from 'vitest'


describe('password bcrypt', () => {
    const hash = (plain: string, salt: number) => hashSync(plain, genSaltSync(salt));
    const compare = (hashStr: string, palinStr: string) => compareSync(palinStr, hashStr);
    it('str value to hash value', () => {
        expect(hash('123123', 10)).not.toBe('123123');
    })
    it('should be same', () => {
        expect(compare('123', hash('123', 10))).not.toBeTruthy()
    })
})



