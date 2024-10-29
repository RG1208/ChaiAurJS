let myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]) //indexing and retierving values 
console.log(myArr.length) // returns the length

// Array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9) //adds to the 0th position
myArr.shift() //removes element from the 0th position
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
console.log(myArr)
console.log(typeof myArr)


const arr = myArr.join()
console.log(arr)
console.log(typeof arr) //returns the string instead of array object 


// Slice vs Splice

const myArray = [11, 12, 13, 14, 15, 16]
console.log("original", myArray);
const a1 = myArray.slice(1, 3) //slicing returns the some specific vlaues from the array
console.log(a1)
console.log("after slicing", myArray);

const myarr1 = [11, 12, 13, 14, 15, 16]
const a2 = myArray.splice(1, 3) //splicing returns the value and changes the original array and removes the part of the spliced portion from the original array 
console.log(a2)
console.log("after splicing", myArray);


