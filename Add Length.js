function addLength(str) {
  const result = [];

  str.split(" ").map((value) => {
    result.push(`${value} ${value.length}`);
  });

  return result;
}

// https://www.codewars.com/kata/559d2284b5bb6799e9000047
