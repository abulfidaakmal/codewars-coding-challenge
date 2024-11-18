function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const data = text
    .toLowerCase()
    .replace(/[^a-z]+/g, "")
    .split("");

  const result = [];

  data.map((value) => {
    result.push(alphabet.indexOf(value) + 1);
  });

  return result.join(" ");
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da
