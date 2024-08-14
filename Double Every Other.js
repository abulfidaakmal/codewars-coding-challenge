function doubleEveryOther(a) {
  return a.map((value, index) => (index % 2 === 1 ? value * 2 : value));
}

{
  function doubleEveryOther(a) {
    for (let i = 1; i < a.length; i += 2) {
      a[i] *= 2;
    }

    return a;
  }
}

// https://www.codewars.com/kata/5809c661f15835266900010a
