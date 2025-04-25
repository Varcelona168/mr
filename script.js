let result = document.getElementById(`result`)
let plusBtn = document.getElementById(`plus`)
let minusBtn = document.getElementById(`minus`)
let sendBtn = document.getElementById(`send`)
let input = document.getElementById(`input`)
let colorInput = document.getElementById(`color`)


let count = 0

plusBtn.addEventListener(`click`, () => {
    count++
    result.innerHTML = count
})

minusBtn.addEventListener(`click`, () => {
    count --
    result.innerHTML = count
})
sendBtn.addEventListener(`click`, () => {
    if (input.value) {
        count = input.value
result.innerHTML = count        
    }
    else {
        alert (`inputga raqam yozing`)
    }
})

colorInput.addEventListener(`input`, () => {
    result.style.color = color.value
})