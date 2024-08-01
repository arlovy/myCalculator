// Displays
previousParameter = document.querySelector('#display-top')
currentParameter = document.querySelector('#display-bottom')

// Botones
numericalButtons = document.querySelectorAll('#num-button')
operationalButtons = document.querySelectorAll('#op-button')
backspaceButton = document.querySelector('#delete-button')
allClearButton = document.querySelector('#clear-button')
equalsButton = document.querySelector('#equals-button')

// Funciones

function appendNumber(buttonValue) {
    if (currentParameter.innerHTML != 0) {
        currentParameter.innerHTML += buttonValue.innerHTML
    }
    else {
        currentParameter.innerHTML = buttonValue.innerHTML
    }
}

function pushToPrevious() {
    twoParameterOperators = ["/", "*"]

    if (twoParameterOperators.includes(currentParameter.innerHTML[0]) == true && previousParameter.innerHTML == "") {
        currentParameter.innerHTML = ""
    }
    previousParameter.innerHTML = currentParameter.innerHTML
    currentParameter.innerHTML = ""
}

function removePlusIfPositive () {
    if (previousParameter.innerHTML[0] == "+") {
        previousParameter.innerHTML = previousParameter.innerHTML.slice(1)
    }
}

function doOperation() {
    if (previousParameter.innerHTML != "") {
        currentParameter.innerHTML = eval(previousParameter.innerHTML + currentParameter.innerHTML)
        previousParameter.innerHTML = ""
    }

    if (currentParameter.innerHTML == "NaN" || currentParameter.innerHTML == "Infinity") {
        currentParameter.innerHTML = "0"
    }
}

function calculateWhileInputting() {
    previousParameter.innerHTML = eval(previousParameter.innerHTML + currentParameter.innerHTML)
    currentParameter.innerHTML = ""
}

// Bloque principal

numericalButtons.forEach(numericalButtons => numericalButtons.addEventListener("click", function () {
    appendNumber(this)
}))

operationalButtons.forEach(operationalButtons => operationalButtons.addEventListener("click", function() {
    if (previousParameter.innerHTML != "") {
        calculateWhileInputting()
    }
    else {
        pushToPrevious()
    }
    currentParameter.innerHTML = currentParameter.innerHTML[0] != this.innerHTML ? currentParameter.innerHTML += `${this.innerHTML} ` : ""
    removePlusIfPositive()
}))

equalsButton.addEventListener("click", function () {
    doOperation()
})

backspaceButton.addEventListener("click", function () {
    if (currentParameter.innerHTML != "") {
        currentParameter.innerHTML = currentParameter.innerHTML.slice(0, currentParameter.innerHTML.length - 1)
    }
})

allClearButton.addEventListener("click", function() {
    previousParameter.innerHTML = ""
    currentParameter.innerHTML = ""
})