function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((data) => !geese.includes(data));
}

gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
]);

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
