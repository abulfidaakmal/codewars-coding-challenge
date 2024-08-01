function findNeedle(haystack) {
  const index = haystack.indexOf("needle");

  return `found the needle at position ${index}`;
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
