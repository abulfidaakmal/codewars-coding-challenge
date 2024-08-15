{
  function solution(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(str[str.length - 1 - i]);
    }

    return result.join("");
  }
}

{
  function solution(str) {
    const result = [];
    for (let i = str.length - 1; i >= 0; i--) {
      result.push(str[i]);
    }

    return result.join("");
  }
}

{
  function solution(str) {
    return str.split("").reverse().join("");
  }
}

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018