function add_char (char) {
    currentParameter.innerHTML += char
}

function moveParameter () {
    if (currentParameter != "") {
        previousParameter.innerHTML = currentParameter.innerHTML
        if (currentParameter.innerHTML.contains("+") || currentParameter.innerHTML.contains("-")) {
            previousParameter.innerHTML = previousParameter.innerHTML.slice(2)
        }
        currentParameter.innerHTML = ""
    }
}

function doResult () {
    res = eval(currentParameter.innerHTML + previousParameter.innerHTML)
    currentParameter.innerHTML= ""
    previousParameter.innerHTML = res
}

currentParameter = document.getElementById('display-bottom')
previousParameter = document.getElementById('display-top')
buttons = document.querySelectorAll('button')


for (i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute('id') === null) { // Revisa si el boton tiene id, solo los botones destinados a operaciones tienen id
        buttons[i].addEventListener("click", function () {
            add_char(this.innerHTML) // Appendea el digito del boton cuando se hace click
        })
    } 
    else if (buttons[i].getAttribute('id') == 'op-button') { // Para los botones destinados a operaciones
        buttons[i].addEventListener("click", function () {
            moveParameter()
            currentParameter.innerHTML += `${this.innerHTML} `
        })
    }
}
