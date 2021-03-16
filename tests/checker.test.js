/* eslint-disable no-undef */
const checkRange = require('../src/checker');

describe('testing checker() - temperature range checker function', () => {
  it('it should return values correctly within the range', () => {
    expect(checkRange(-1)).toEqual(0);

    expect(checkRange(256)).toEqual(255);

    expect(checkRange(100)).toEqual(100);
  });
});
