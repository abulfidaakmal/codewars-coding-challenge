function smallEnough(a, limit) {
  return Boolean(!a.filter((b) => b > limit).length);
}

// https://www.codewars.com/kata/57cc981a58da9e302a000214
