function fakeBin(x) {
  x = x.split("");

  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if (char < 5) {
      x[i] = "0";
    } else {
      x[i] = "1";
    }
  }

  return x.join("");
}

// https://www.codewars.com/kata/57eae65a4321032ce000002d
