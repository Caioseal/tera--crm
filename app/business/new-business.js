class Card {
    constructor(registerType = "", cpf = "", fullName = "", preferedName = "", companyName = "", phone = "", whatsNumber = "", email = "", product = "", destination = "", price = "", nextContact = "", preferedContact = "", action = "", priority = "", comment = "") {
        this.registerType = registerType
        this.cpf = cpf
        this.fullName = fullName
        this.companyName = companyName
        this.phone = phone
        this.email = email
        this.product = product
        this.price = price
        this.nextContact = nextContact
        this.preferedContact = preferedContact
        this.action = action
        this.priority = priority
        this.comment = comment
    }
}

//Attributes
let newBusinessButton
let listCard
let listCardObject = []
let businessQuantity = 1;

//Add Event Listener to New Business buttons
let addNewButtonList = document.getElementsByClassName('new-card')
for (let x = 0; x < addNewButtonList.length; x++) {
    addNewButtonList[x].addEventListener("click", saveColumn)
}

//Save the Column to add a new Card
function saveColumn() {
    let placeholder = this
    listCard = placeholder.previousElementSibling
}

//Add EventListener to the Save button
const saveButton = document.getElementById('salvar')
saveButton.addEventListener('click', addNewCard)

function addNewCard() {
    let inputResponses = document.querySelectorAll('input')
    let selectResponses = document.querySelectorAll('select')

    const card = new Card
    card.registerType = selectResponses[0]
    card.cpf = inputResponses[1].value
    card.fullName = inputResponses[2].value
    card.companyName = inputResponses[3].value
    card.phone = inputResponses[4].value
    card.email = inputResponses[5].value
    card.product = selectResponses[1].value
    card.price = inputResponses[6].value
    card.nextContact = inputResponses[7].value
    card.preferedContact = selectResponses[3].value
    card.action = selectResponses[4].value
    card.priority = selectResponses[2].value
    card.comment = document.getElementById('form-comment').value

    listCardObject.push(card)

    const businessItem = document.createElement('div')
    businessItem.setAttribute('class', 'list-item')
    const businessItemPriority = document.createElement('div')
    businessItemPriority.setAttribute('class', 'list-item-priority')

    if (card.priority == "Baixa prioridade") {
        businessItemPriority.setAttribute('class', 'list-item-priority low')
    } else if (card.priority == "Média prioridade") {
        businessItemPriority.setAttribute('class', 'list-item-priority medium')
    } else {
        businessItemPriority.setAttribute('class', 'list-item-priority high')
    }

    businessItemPriority.innerHTML = card.priority
    businessItem.appendChild(businessItemPriority)
    businessItem.innerHTML += "<div class='list-item-name'><h3 class='client-name'>" +
        card.product + "</h3><i class='material-icons delete'>more_horiz</i></div><h4 class='client-name'>" +
        card.fullName + "</h4><h4 class='client-company'>" +
        card.companyName + "</h4><div class='list-item-name-align'><i class='material-icons tiny-icon'>monetization_on</i>&nbsp;R$ " +
        card.price + "</div><div class='list-item-name-align'><i class='material-icons tiny-icon'>date_range</i>&nbsp;" +
        card.nextContact + "</div>"

    listCard.appendChild(businessItem)

    updateQuantity()
    updateBusinessList()
}

//Update the total of active business
function updateQuantity() {
    businessQuantity += 1
    document.getElementById('qttActive').innerText = businessQuantity
}

//Create the event to add a new column
let addColumnList = document.getElementsByClassName('button-transition')

for (let j = 0; j < addColumnList.length; j++) {
    addColumnList[j].addEventListener('click', addColumn)
}

//Add a new Column
function addColumn() {
    const businessColumn = document.createElement('div')
    businessColumn.setAttribute('class', 'list-wrapper')
    businessColumn.innerHTML = "<div class='list-content'><div class='list-title container'><h2 class='list-title-h2'>Nova Coluna</h2><div class='dropdown'><i class='material-icons dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'></i><ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'><li><a class='dropdown-item' href='#'>Action</a></li><li><a class='dropdown-item' href='#'>Another action</a></li><li><a class='dropdown-item' href='#'>Something else here</a></li></ul></div><i class='material-icons button-transition'>add_circle_outline</i></div><section class='container d-flex justify-content-center'><h3>R$ 0,00</h3></section><div class='list-card' id='teste'></div><a class='new-card' href='#exampleModal' data-bs-toggle='modal' data-bs-target='#exampleModal' id='newClient'><i class='material-icons'>add_circle_outline</i>&nbsp;Novo negócio</a></div>"

    let board = this.parentNode.parentNode.parentNode.parentNode
    let currentColumn = this.parentNode.parentNode.parentNode
    let siblingQuantity = board.children.length
    let boardChildren = board.children

    for (let k = 0; k < siblingQuantity; k++) {
        if (boardChildren[k] == currentColumn) {
            board.insertBefore(businessColumn, board.children[k + 1])
        }
    }

    updateBusinessList()
    updateColumnList()
}

//Update Business List and adds an event listener
function updateBusinessList() {
    addButtonlist = document.getElementsByClassName('new-card')

    for (let i = 0; i < addButtonlist.length; i++) {
        addButtonlist[i].addEventListener('click', saveColumn)
    }
}

//Update Column List
function updateColumnList() {
    addColumnList = document.getElementsByClassName('button-transition')
    for (let j = 0; j < addColumnList.length; j++) {
        addColumnList[j].addEventListener('click', addColumn)
    }
}

function changeCPFlabel() {
    let registerType = document.getElementById('form-registerType').value
    console.log(registerType)

    if (registerType == "Pessoa Jurídica") {
        let registerTypeElement = document.getElementById('form-cpf')
        console.log(registerTypeElement)
        registerTypeElement.value = 'teste'
        console.log('teste2')
    }
}

function alterarNome(idDiv, idTxt, idH2) {
    let teste = document.querySelector('#' + idH2);
    console.log(teste)
    teste.innerHTML = " <div id='" + idDiv + "'>  <input type='text' id='" + idTxt + "' value='" + teste.innerHTML + "'></div>"
}