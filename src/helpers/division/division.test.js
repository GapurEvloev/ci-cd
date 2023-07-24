import {division} from "./division";

describe('division', function () {
    test('positive', () => {
        expect(division(15, 5)).toBe(3);
    })

    test('negative', () => {
        expect(division(-15, -5)).toBe(3);
    })
});
