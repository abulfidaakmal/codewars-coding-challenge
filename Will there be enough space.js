function enough(cap, on, wait) {
  const totalPeople = on + wait;
  return totalPeople > cap ? totalPeople - cap : 0;
}

// https://www.codewars.com/kata/5875b200d520904a04000003