const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// arr1.push(arr2)
// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// console.log(arr1)
// console.log(arr1[3])
// console.log(arr1[3][1])

// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
// const arr = arr1.concat(arr2)
// console.log(arr);

// const array = [...arr1, ...arr2] //it is the spread function
// console.log(array);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, [13, 14], 15, 16]]]
// console.log(anotherArray.flat(Infinity)); //combines all the subarray into a single array // infinity is the value which is to be given to how much depth the sub-aarays are to be flattened

console.log(Array.isArray("Rachit"))
console.log(Array.from("Rachit"))
console.log(Array.from({ name: "Rachit" }))
console.log(Array.of("Rachit"))

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));
