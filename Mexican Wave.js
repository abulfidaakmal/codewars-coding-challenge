function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(waveStr);
    }
  }

  return result;
}

{
  function wave(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split("");
      if (copy[i] !== " ") {
        copy[i] = copy[i].toUpperCase();
        newArr.push(copy.join(""));
      }
    }
    return newArr;
  }
}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
