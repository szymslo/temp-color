const { tempToColor }  = require('../index');

describe('testing tempToColor() - main conversion function', () => {

    it('should throw exception on any non numeric input', () => {
        expect(() => {
            tempToColor(expect.any(String), expect.any(Number), expect.any(Number))
        }).toThrow(TypeError);

        expect(() => {
            tempToColor(expect.any(Number), expect.any(String), expect.any(Number))
        }).toThrow(TypeError);

        expect(() => {
            tempToColor(expect.any(Number), expect.any(Number), expect.any(String))
        }).toThrow(TypeError);
    });

    it('should throw exception when min is greater than max', () => {
        expect(() => {
            tempToColor(expect.any(Number), 10, -10)
        }).toThrow(Error);
    });

    it('calculates RGB values propely', () => {
        expect(tempToColor(-300, -30, 30)).toEqual({
            r: 255,
            g: 0,
            b: 0
        });
        expect(tempToColor(-15, -30, 30)).toEqual({
            r: 128,
            g: 0,
            b: 255
        });
        expect(tempToColor(0, -30, 30)).toEqual({
            r: 0,
            g: 255,
            b: 255
        });
        expect(tempToColor(15, -30, 30)).toEqual({
            r: 128,
            g: 255,
            b: 0
        });
        expect(tempToColor(300, -30, 30)).toEqual({
            r: 255,
            g: 0,
            b: 0
        });
    });
});
