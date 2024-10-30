// function parameters as object

const user = {
    username: "Rachit",
    price: 100
}

function handleObject(anyObject) {
    console.log(`price is ${anyObject.price} and username is ${anyObject.username}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 200
})