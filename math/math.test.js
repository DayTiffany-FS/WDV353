const math = require('./math');

describe("Math Test", () => {
    test("Adds 17 + 8 to equal 25", () => {
        expect(math.add(17,8)).toBe(25);
    });

    test("Subtracts 50 - 14 to equal 36", () => {
        expect(math.subtract(50,14)).toBe(36);
    });

    test("Multiples 6 * 9 to equal 54", () => {
        expect(math.multiply(6,9)).toBe(54);
    });

    test("Divides 10 / 5 to equal 2", () => {
        expect(math.divide(10,5)).toBe(2);
    });

    test("Calculates the square root of 64 to be 8", () => {
        expect(math.sqrt(64)).toBe(8);
    });

    test("Returns the maximum of 30 and 5 to be 30", () => {
        expect(math.max(30, 5)).toBe(30);
    });
});