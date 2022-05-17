class Product {
    constructor(productType = "", productName = "", productDestination = "", productDescription = "", productPrice = "") {
        this.productType = productType
        this.productName = productName
        this.productDestination = productDestination
        this.productDescription = productDescription
        this.productPrice = productPrice
    }
}

let contador = 4

let buttonAdd = document.getElementById('productSaveButton')
buttonAdd.addEventListener('click', newLine)

function newLine() {
    const productResponses = document.querySelectorAll('input')
    const productSelectResponses = document.querySelectorAll('select')

    let tbody = document.getElementById('tbody')
    let row = document.createElement('tr')
    
    let cell0 = document.createElement('th')
    cell0.innerHTML = contador++
    
    let cell1 = document.createElement('th')
    cell1.innerHTML = productSelectResponses[0].value

    let cell2 = document.createElement('th')
    cell2.innerHTML = productResponses[1].value

    let cell3 = document.createElement('th')
    cell3.innerHTML = productSelectResponses[1].value

    let cell4 = document.createElement('th')
    cell4.innerHTML = document.getElementById('productComment').value

    let cell5 = document.createElement('th')
    cell5.innerHTML = productResponses[2].value

    row.appendChild(cell0)
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)

    tbody.appendChild(row)
}