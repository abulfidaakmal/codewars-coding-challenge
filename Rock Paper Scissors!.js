const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  }

  return "Player 2 won!";
};

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f