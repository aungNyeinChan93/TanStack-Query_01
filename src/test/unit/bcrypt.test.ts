/* eslint-disable @typescript-eslint/no-explicit-any */
import { compareSync, hashSync, genSaltSync } from 'bcryptjs';
import { describe, it, expect } from 'vitest'


describe('password bcrypt', () => {
    const hash = (plain: string, salt: number) => hashSync(plain, genSaltSync(salt));
    const compare = (hashStr: string, palinStr: string) => compareSync(palinStr, hashStr);
    it('str value to hash value', () => {
        expect(hash('123123', 10)).not.toBe('123123');
    })
    it('should be same', () => {
        expect(compare('123', hash('123', 10))).toBeFalsy()
    })
})


it('test falsy and truthy', () => {
    expect('').toBeFalsy()
    expect("").toBeFalsy()
    expect(``).toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect(0).toBeFalsy()
    // expect().toBeFalsy()
    expect(0 + 0).not.toBeTruthy()
});


it('should not to be interger', () => {
    expect('hihi').not.toBeTypeOf('number');
})
it('should be number', () => {
    expect(12).toBeTypeOf('number')
})

it('should be contain', () => {
    expect('us,uk,jpn').include('us')
})



it('should be user age is grether than 18', () => {
    const user = {
        name: 'aung nyein chan',
        age: 23,
        status: true,
        other: undefined
    }

    const check = (a) => {
        if (typeof a !== 'string') throw new Error('type must be string')
        return a;
    };
    expect(user.age).toBeGreaterThan(18);
    expect(user.status).not.toBeFalsy();
    expect(user.name).match(/chan/);
    expect(user.name).include('ch');
    expect(user.age).toBeLessThan(50);
    expect(user).toHaveProperty("name");
    expect(user.status).toBeDefined();
    expect(user.other).not.toBeDefined();
    expect(check(user.name)).toBe('aung nyein chan')
});


it('should be throw erro when under 18', () => {
    const checkAge = (age: number) => {
        if (age <= 18) throw new Error('age must be over 18');
        return age
    }
    expect(() => checkAge(12)).toThrowError('age must be over 18')
})

