const user = {}

user.name = "Rachit"
user.email = "rg@gmail.com"
user.password = "123456"
user.isLoggedIn = false

// console.log(user)

const anotherUser = {
    name: "Hello",
    Fullname: {
        userFullName: {
            firstName: "Hello",
            lastName: "Kumar"
        }
    }
}

console.log(anotherUser);
console.log(anotherUser.Fullname);
console.log(anotherUser.Fullname.userFullName);
console.log(anotherUser.Fullname.userFullName.firstName);

