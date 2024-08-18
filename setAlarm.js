function setAlarm(employed, vacation) {
  if (employed === vacation) {
    return false;
  } else if (employed === false) {
    return false;
  } else {
    return true;
  }
}

{
  const setAlarm = (employed, vacation) => employed && !vacation;
}

// https://www.codewars.com/kata/568dcc3c7f12767a62000038
