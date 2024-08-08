function isPalindrome(x) {
  x = x.toLowerCase();

  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) !== x.charAt(x.length - i - 1)) {
      return false;
    }
  }

  return true;
}

{
  const palindrome = (str) => {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return str === str.split("").reverse().join("");
  };

  palindrome("Abba");
}

isPalindrome("Abba");

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
