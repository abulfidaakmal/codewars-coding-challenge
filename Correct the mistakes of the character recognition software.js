function correct(string) {
  const result = [];

  string.split("").map((value) => {
    if (value === "0") {
      value = "O";
    } else if (value === "5") {
      value = "S";
    } else if (value === "1") {
      value = "I";
    }

    result.push(value);
  });

  return result.join("");
}

// https://www.codewars.com/kata/577bd026df78c19bca0002c0
