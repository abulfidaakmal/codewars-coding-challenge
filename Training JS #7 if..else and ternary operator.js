function saleHotdogs(n) {
  let result;

  if (n >= 10) {
    result = n * 90;
  } else if (n >= 5 && n < 10) {
    result = n * 95;
  } else {
    result = n * 100;
  }

  return result;
}

// https://www.codewars.com/kata/57202aefe8d6c514300001fd
