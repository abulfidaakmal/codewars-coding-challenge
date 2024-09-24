function printerError(s) {
  const totalColor = s.length;
  const error = s.split("").filter((char) => char > "m").length;

  return `${error}/${totalColor}`;
}

// https://www.codewars.com/kata/56541980fa08ab47a0000040
