const wrapper = document.querySelector('#wrapper')
const submitBox = document.querySelector("#subt")
submitBox.addEventListener('click', function (e) {
    e.preventDefault()
    const random = Math.ceil(Math.random() * 100)
    const inputBox = document.querySelector("#guessField")
    const result = document.querySelector("#result")
    const guessRemain = document.querySelector(".lastResult")
    if (inputBox.value == " " || inputBox.value <= 0 || isNaN(inputBox.value == " " || inputBox.value > 101)) {
        result.innerHTML = "Please enter a valid number"
    }
    else {

        if (inputBox.value == random) {
            result.innerHTML = "You got it! Congratulations"
        }
        else {
            result.innerHTML = "You missed"
        }
    }
})

