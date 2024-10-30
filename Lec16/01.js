// Singleton
//  Object.create

// Object literals
const symbol = Symbol("key1")

const JsUser = {
    name: "Rachit",
    [symbol]: "Key1", //to use key values as a symbol, use square brackets
    "full name": "Rachit Garg",
    age: 19,
    location: "New Delhi",
    emailId: "rachit@google.com",
}

// // accessing data in objects

// console.log(JsUser["emailId"]);
// console.log(JsUser["full name"]); //full name can be accessed by using this method only
// console.log(JsUser[symbol])

// JsUser.emailId = "rachit1208@gmail.com" //to overwrite in a object
// console.log(JsUser.emailId);

// Object.freeze(JsUser) // after this no alteration can be done in a object
// JsUser.emailId = "rachit2005@gmail.com" //to overwrite in a object
// console.log(JsUser.emailId);

// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello");
}

JsUser.greetingTwo = function () {
    console.log(`Hello, ${this.name}`);
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())