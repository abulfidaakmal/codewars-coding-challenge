function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  return a + b > c && a + c > b && b + c > a;
}

// https://www.codewars.com/kata/56606694ec01347ce800001b
