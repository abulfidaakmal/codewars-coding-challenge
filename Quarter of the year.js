const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 3 && month <= 6) {
    return 2;
  } else if (month >= 6 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
