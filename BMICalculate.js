{
    function bmi(weight, height) {
        let result = "";
        const calculate = weight / height ** 2;
        if (calculate <= 18.5) {
        result = "Underweight";
        } else if (calculate <= 25.0) {
        result = "Normal";
        } else if (calculate <= 30.0) {
        result = "Overweight";
        } else if (calculate >= 30) {
        result = "Obese";
        }
        return result;
    }
}

{
    const bmi = (weight, height) => {
        let result = "";
        const calculate = weight / height ** 2;
        switch (true) {
        case calculate <= 18.5:
            result = "Underweight";
            break;
        case calculate <= 25.0:
            result = "Normal";
            break;
        case calculate <= 30.0:
            result = "Overweight";
            break;
        case calculate >= 30:
            result = "Obese";
            break;
        }
        return result;
    };
}

// https://www.codewars.com/kata/57a429e253ba3381850000fb
