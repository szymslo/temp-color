function checkRange (value) {
  if (value <= 0) {
    return 0;
  }
  if (value > 255) {
    return 255;
  }
  return value;
}

module.exports = checkRange;
