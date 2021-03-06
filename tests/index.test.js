/* eslint-disable no-undef */
const { tempToColor } = require('../src/index');

describe('testing tempToColor() - main conversion function', () => {
  it('should throw exception on any non numeric input', () => {
    expect(() => {
      tempToColor('abc', 10, 20);
    }).toThrow(TypeError);

    expect(() => {
      tempToColor(1, 'abc', 20);
    }).toThrow(TypeError);

    expect(() => {
      tempToColor(1, 10, 'abc');
    }).toThrow(TypeError);
  });

  it('should throw exception when min is greater than max', () => {
    expect(() => {
      tempToColor(5, 10, -10);
    }).toThrow('minimum cannot be greater than maximum');
  });

  it('calculates RGB values propely', () => {
    expect(tempToColor(-300, -30, 30)).toEqual({
      r: 0,
      g: 0,
      b: 255
    });
    expect(tempToColor(-15, -30, 30)).toEqual({
      r: 0,
      g: 255,
      b: 255
    });
    expect(tempToColor(0, -30, 30)).toEqual({
      r: 0,
      g: 255,
      b: 0
    });
    expect(tempToColor(15, -30, 30)).toEqual({
      r: 255,
      g: 255,
      b: 0
    });
    expect(tempToColor(300, -30, 30)).toEqual({
      r: 255,
      g: 0,
      b: 0
    });
    expect(tempToColor(-300, -30, 30, 'extended')).toEqual({
      r: 128,
      g: 0,
      b: 255
    });
    expect(tempToColor(-20, -30, 30, 'extended')).toEqual({
      r: 0,
      g: 0,
      b: 255
    });
    expect(tempToColor(-15, -30, 30, 'extended')).toEqual({
      r: 0,
      g: 128,
      b: 255
    });
    expect(tempToColor(-5, -30, 30, 'extended')).toEqual({
      r: 0,
      g: 255,
      b: 128
    });
    expect(tempToColor(0, -30, 30, 'extended')).toEqual({
      r: 0,
      g: 255,
      b: 0
    });
    expect(tempToColor(5, -30, 30, 'extended')).toEqual({
      r: 128,
      g: 255,
      b: 0
    });
    expect(tempToColor(15, -30, 30, 'extended')).toEqual({
      r: 255,
      g: 128,
      b: 0
    });
    expect(tempToColor(20, -30, 30, 'extended')).toEqual({
      r: 255,
      g: 0,
      b: 0
    });
    expect(tempToColor(300, -30, 30, 'extended')).toEqual({
      r: 255,
      g: 0,
      b: 128
    });
    expect(tempToColor(-300, 0, 100, 'half')).toEqual({
      r: 0,
      g: 128,
      b: 0
    });
    expect(tempToColor(25, 0, 100, 'half')).toEqual({
      r: 0,
      g: 255,
      b: 0
    });
    expect(tempToColor(50, 0, 100, 'half')).toEqual({
      r: 255,
      g: 255,
      b: 0
    });
    expect(tempToColor(75, 0, 100, 'half')).toEqual({
      r: 255,
      g: 0,
      b: 0
    });
    expect(tempToColor(300, 0, 100, 'half')).toEqual({
      r: 128,
      g: 0,
      b: 0
    });
  });
});
