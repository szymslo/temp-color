function checkRange (value) {
  if (value <= 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  } else return value;
}

module.exports = checkRange;
