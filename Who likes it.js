function likes(names) {
  if (!names.length) {
    return "no one likes this";
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else {
    return `${names} likes this`;
  }
}

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
