let businessQuantity = 1;

//Create a new Business
let addButtonlist = document.getElementsByClassName('new-card')

for (let i = 0; i < addButtonlist.length; i++) {
    addButtonlist[i].addEventListener('click', addBusiness)
}

function addBusiness() {
    let placeholder = this
    let listCard

    while (placeholder) {
        if (placeholder.classList.contains('list-card')) {
            listCard = placeholder
            break
        }
        placeholder = placeholder.previousElementSibling
    }

    let businessItem = document.createElement('div')
    businessItem.setAttribute('class', 'list-item')
    businessItem.innerHTML = "<div class='list-item-priority low'>Baixa prioridade</div><div class='list-item-name'><h3 class='client-name'>Pacote para Gramado</h3><i class='material-icons delete'>more_horiz</i></div><h4 class='client-name'>Chris Rock</h4><h4 class='client-company'>Bradesco S.A.</h4><div class='list-item-name-align'><i class='material-icons tiny-icon'>monetization_on</i>&nbsp;R$ 300,00</div><div class='list-item-name-align'><i class='material-icons tiny-icon'>date_range</i>&nbsp;31/12/2000</div>"

    listCard.appendChild(businessItem)

    updateQuantity()
}

//Update the total of active business
function updateQuantity() {
    businessQuantity += 1
    document.getElementById('qttActive').innerText = businessQuantity
}

//Create a new Column
let addColumnList = document.getElementsByClassName('button-transition')

for (let j = 0; j < addColumnList.length; j++) {
    addColumnList[j].addEventListener('click', addColumn)
}

function addColumn() {
    let businessColumn = document.createElement('div')
    businessColumn.setAttribute('class', 'list-wrapper')
    businessColumn.innerHTML = "<div class='list-content'><div class='list-title container'><h2 class='list-title-h2'>Análise</h2><div class='dropdown'><i class='material-icons dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'></i><ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'><li><a class='dropdown-item' href='#'>Action</a></li><li><a class='dropdown-item' href='#'>Another action</a></li><li><a class='dropdown-item' href='#'>Something else here</a></li></ul></div><i class='material-icons button-transition'>add_circle_outline</i></div><section class='container d-flex justify-content-center'><h3>R$ 0,00</h3></section><div class='list-card' id='teste'></div><a class='new-card' href='#exampleModal' data-bs-toggle='modal' data-bs-target='#exampleModal' id='newClient'><i class='material-icons'>add_circle_outline</i>&nbsp;Novo negócio</a></div>"
    
    let board = this.parentNode.parentNode.parentNode.parentNode
    let currentColumn = this.parentNode.parentNode.parentNode
    let siblingQuantity = board.children.length
    let boardChildren = board.children

    for (let k = 0; k < siblingQuantity; k++) {
        if (boardChildren[k] == currentColumn) {
            board.insertBefore(businessColumn, board.children[k+1])
        }
    }

    updateBusinessList()
    updateColumnList()
}

//Update Business List and adds an event listener
function updateBusinessList() {
    addButtonlist = document.getElementsByClassName('new-card')

    for (let i = 0; i < addButtonlist.length; i++) {
        addButtonlist[i].addEventListener('click', addBusiness)
    }
}

//Update Column List
function updateColumnList() {
    addColumnList = document.getElementsByClassName('button-transition')
    for (let j = 0; j < addColumnList.length; j++) {
        addColumnList[j].addEventListener('click', addColumn)
    }
}