{
    function basicOp(operation, value1, value2) {
        let result = 0;
        switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        }
        return result;
    }
}

{
    const basicOp = (operation, value1, value2) => {
        let cases = {
            "+": value1 + value2,
            "-": value1 - value2,
            "*": value1 * value2,
            "/": value1 / value2,
        }
        return cases[operation];
    }
}

// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
