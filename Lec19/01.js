// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2;
//     return result
// }
// const result = addTwoNumbers(1, 3)

function username(name = "rachit") {
    // In this case if no argument is passed then a default value is taken and if argument is passed then that is given priority
    return `Hi ${name}`
}
console.log(username("Sam"))
console.log(username())
