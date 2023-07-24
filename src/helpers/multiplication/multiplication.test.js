import {multiplication} from "./multiplication";

describe('multiplication', function () {
    test('positive', () => {
        expect(multiplication(5, 5)).toBe(25);
    })

    test('negative', () => {
        expect(multiplication(-5, -5)).toBe(25);
    })
});
