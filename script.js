function selectDish (food) {
    const button = document.querySelector('.dish.checked') //* NULL
    const teste = food.children[3]

    if (button !== null) {
        button.classList.remove('checked')
    }

    if (food !== button) {
        food.classList.add('checked') //* Adiciona classe dish checked
    }

    console.log(button)
    console.log(food)
    checkList()
};

function secondDish (food) {
    const button = document.querySelector('.drink.checked')

    if (button !== null) {
        button.classList.remove('checked')
    }

    if (food !== button) {
        food.classList.add('checked') //* Adiciona classe dish checked
    }

    console.log(button)
    console.log(food)
    checkList()
}

function thirdDish (food) {
    const button = document.querySelector('.dessert.checked')

    if (button !== null) {
        button.classList.remove('checked')
    }

    if (food !== button) {
        food.classList.add('checked') //* Adiciona classe dish checked
    }

    console.log(button)
    console.log(food)
    checkList()
}

function checkButton () {
    const button = document.querySelector('.dish.checked')
    const button2 = document.querySelector('.drink.checked')
    const button3 = document.querySelector('.dessert.checked')

    if (button !== null && button2 !== null && button3 !== null) {
        return true;
    } else {
        return false;
    }
}

//! checkbutton - true ou falso

function checkList () {
    const button = document.querySelector('.button')
    const h2 = button.firstElementChild

    if (checkButton() === true) {
        button.style.backgroundColor = '#32b72f'
        h2.innerHTML = 'Fechar pedido!'
        h2.style.fontWeight = 'bold'

        console.log(button)
    } else {
        button.style.backgroundColor = '#a6a6a6'
        h2.innerHTML = 'Selecione os 3 itens <br> para fechar o pedido'
        h2.style.fontWeight = 'normal'
    }

    console.log(h2)
}