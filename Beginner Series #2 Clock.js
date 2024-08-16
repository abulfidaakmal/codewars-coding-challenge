function past(h, m, s) {
  const hourToSecond = h * 3600 * 1000;
  const MinuteToSecond = m * 60 * 1000;
  const SecondToMiliSecond = s * 1000;

  return hourToSecond + MinuteToSecond + SecondToMiliSecond;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a