const arr = [1, 2, 3, 4]

// for (const element of arr) {
//     console.log(element);

// }

// const greetings = "Hello World"

// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(greet);

// }

const myObj = {
    1: "one",
    2: "two"
}

for (const [key, value] of myObj) {
    console.log(key, ":-", value);

}