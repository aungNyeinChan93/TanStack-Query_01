export const sum = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divided = (a: number, b: number): number => {
    if (b === 0) throw new Error('Can not divide by 0');
    return a / b;
}