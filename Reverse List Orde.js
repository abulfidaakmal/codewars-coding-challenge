{
  function reverseList(list) {
    return list.reverse();
  }

  reverseList([1, 2, 3, 4]);
}

{
  function reverseList(list) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      result.push(list[list.length - i - 1]);
    }

    return result;
  }

  reverseList([1, 2, 3, 4]);
}

// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
