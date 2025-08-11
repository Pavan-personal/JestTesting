export function sum(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number{
    if (a == 0 || b == 0) {
        return 0;
    }
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b == 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// const a = divide(9,0);
// console.log(a);