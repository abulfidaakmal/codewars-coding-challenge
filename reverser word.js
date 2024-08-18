function reverseWords(str) {
  str = str.split(" ");

  const result = str.map((value) => {
    value = value.split("");
    const data = [];

    for (let i = value.length; i >= 0; i--) {
      data.push(value[i]);
    }

    return data.join("");
  });

  return result.join(" ");
}

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
