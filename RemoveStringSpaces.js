{
    function noSpace(x) {
        return x
        .split(" ")
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

{
    const noSpace = (x) => x.split(" ").join('');
}

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
