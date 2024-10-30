// combining two objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 } //this doesnot merges two objects but infact gives object in object
// const obj3 = Object.assign({}, obj1, obj2) //this empty curly braces ensures that the given result is a object, it is optional to write a curly braces at the begining
const obj3 = { ...obj1, ...obj2 } //spread operator
console.log(obj3);
