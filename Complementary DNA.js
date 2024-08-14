function dnaStrand(dna) {
  const changeA = (a) => (a === "A" ? "T" : "A");
  const changeG = (g) => (g === "G" ? "C" : "G");

  const result = dna.split("").map((value) => {
    if (value === "A" || value === "T") {
      value = changeA(value);
    } else {
      value = changeG(value);
    }

    return value;
  });

  return result.join("");
}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
