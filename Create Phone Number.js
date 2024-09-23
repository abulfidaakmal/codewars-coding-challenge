function createPhoneNumber(numbers) {
  let result = "(";

  numbers.map((number, index) => {
    result += number;

    if (index === 2) result += ") ";

    if (index === 5) result += "-";
  });

  return result;
}

{
  function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
      format = format.replace("x", numbers[i]);
    }

    return format;
  }
}

// www.codewars.com/kata/525f50e3b73515a6db000b83
