let buttonAdd = document.getElementById('button-add')
buttonAdd.addEventListener('click', newLine)

function newLine() {
    let tbody = document.getElementById('tbody')

    let row = document.createElement('tr')
    
    let cell0 = document.createElement('th')
    cell0.innerHTML = 4
    
    let cell1 = document.createElement('th')
    cell1.innerHTML = "Hotel"

    let cell2 = document.createElement('th')
    cell2.innerHTML = 'Ibis'

    let cell3 = document.createElement('th')
    cell3.innerHTML = 'Melhor custo benefício'

    let cell4 = document.createElement('th')
    cell4.innerHTML = 'R$150.00'

    row.appendChild(cell0)
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)

    tbody.appendChild(row)
}