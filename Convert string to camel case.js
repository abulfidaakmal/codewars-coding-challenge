function toCamelCase(str) {
  str = str.replace(/_/gi, "-").split("-");

  for (let i = 1; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }

  return str.join("");
}

// https://www.codewars.com/kata/517abf86da9663f1d2000003
