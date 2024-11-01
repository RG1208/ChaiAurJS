// THIS

const user = {
    username: "Rachit",
    price: 999,
    welcomeBack: function () {
        // console.log(`${this.username}, Welcome`);
        // console.log(this);

    }
}
// user.welcomeBack();
// user.username = "sam"
// user.welcomeBack();



// Arrow functions declaration

// explicit reutrn
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(1, 2));

