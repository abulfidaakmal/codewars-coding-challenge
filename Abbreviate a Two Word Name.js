function abbrevName(name) {
  const result = [];
  name.split(" ").map((value) => {
    result.push(value[0].toUpperCase());
  });

  return result.join(".");
}

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
