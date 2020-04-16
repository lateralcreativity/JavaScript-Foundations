// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
let principal = 200000;
let interestRate = 0.05;
let years = 30;
const name = 'Gabriel';




// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
let monthlyInterestRate = interestRate / 12;

let periods = years * 12;



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
// M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]
// ```

// In order to find your monthly payment amount "M,” you need to plug in the following three numbers from your loan:

// `P` = Principal amount (the total amount borrowed)
// `I` = Interest rate on the mortgage
// `N` = Number of periods (monthly mortgage payments)
let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);

let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;

let monthlyRate = Math.round((principal * (numerator / denominator)) * 100) / 100;

console.log(`Task 2 ${monthlyRate}`);


// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
let mortgageCalculator = (name) => {
    return `${name}, your monthly rate is ${monthlyRate}`;
}
console.log(mortgageCalculator('Task 3'));


// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/
mortgageCalculator = (principal, interestRate, years) => {
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = Math.round((principal * (numerator / denominator)) * 100) / 100;
    return monthlyRate;
}
console.log(`Task 4 \n${mortgageCalculator(200000, 0.05, 30)}`);


// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/
mortgageCalculator = (principal, interestRate, years, creditScore) => {
    if (creditScore > 740) {
        interestRate -= 0.005;
    }

    if (creditScore < 660) {
        interestRate += 0.005;
    }
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = Math.round((principal * (numerator / denominator)) * 100) / 100;
    return monthlyRate;
}
console.log(`Task 5 \n${mortgageCalculator(200000, 0.05, 30, 690)}`);

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

let variableInterestRate = (principal, interestRate, years) => {
    let count = 0;
    for (let i = (interestRate - 0.02); i < (interestRate + 0.021); i += 0.005) {
        let monthlyInterestRate = i / 12;
        let periods = years * 12;
        let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
        let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
        let monthlyRate = Math.round(principal * (numerator / denominator));

        if (count % 2 === 0) {
            console.log(`${name}, with an interest rate of ${Math.round(i * 100) / 100}, your monthly rate is $${monthlyRate}`);
        } else {
            console.log(`${name}, with an interest rate of ${Math.round(i * 1000) / 1000}, your monthly rate is $${monthlyRate}`);
        }
        count += 1;
    }
}
variableInterestRate(200000, 0.04, 30);
console.log('\n\n\n\n');


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
totalCalculator = (principal, interestRate, years, propertyTax, homeInsurance, hoaFees) => {
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
    let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
    let monthlyRate = Math.round((principal * (numerator / denominator)) * 100) / 100;
    let totalCost = propertyTax + homeInsurance + hoaFees + monthlyRate;
    return totalCost;
}
console.log(`Strech 1 \nYour total cost is ${totalCalculator(200000, 0.05, 30, 1, 1, 1)}`);

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */
let nameFetcher = () => {
    let name = prompt("Please enter your name")
    return `Stretch 3 \nHello ${name}`;
}
console.log(nameFetcher());

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
console.log('Stretch 4\n\n\n');
let rates = [0.04, 0.05, 0.06];

let refactor = (principal, rates, years) => {
    for (let i = 0; i < rates.length; i++) {
        let count = 0;
        for (let a = (rates[i] - 0.02); a < (rates[i] + 0.02); a += 0.005) {
            let monthlyInterestRate = a / 12;
            let periods = years * 12;
            let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods);
            let denominator = Math.pow((1 + monthlyInterestRate), periods) - 1;
            let monthlyRate = Math.round(principal * (numerator / denominator));

            if (count % 2 === 0) {
                console.log(`${name}, with an interest rate of ${Math.round(a * 100) / 100}, your monthly rate is $${monthlyRate}`);
            } else {
                console.log(`${name}, with an interest rate of ${Math.round(a * 1000) / 1000}, your monthly rate is $${monthlyRate}`);
            }
            count += 1;
        }
        console.log('\n\n\n');
    }
}

refactor(200000, rates, 30);