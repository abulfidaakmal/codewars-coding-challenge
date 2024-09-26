var countBits = function (n) {
  const values = n.toString(2).match(/1/gi);
  return values?.length || 0;
};

{
  var countBits = (n) => n.toString(2).split("0").join("").length;
}

// https://www.codewars.com/kata/526571aae218b8ee490006f4
