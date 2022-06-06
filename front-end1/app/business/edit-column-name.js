let placeholder
let editColumnNameButton = document.getElementsByClassName('edit-column-name')

for (let x = 0; x < editColumnNameButton.length; x++) {
    editColumnNameButton[x].addEventListener('click', editColumnName)
}

function editColumnName() {
    placeholder = this
    let columnName = this.parentElement.parentElement.parentElement.previousElementSibling
    console.log('columnName')
    columnName.innerHTML = "<div><input type='text' id='inputNameColumn' value='" + columnName.innerText + "'></div>" 
    document.getElementById('inputNameColumn').focus()

    document.getElementById('inputNameColumn').addEventListener('blur', (e) => {
        columnName.innerHTML = "<h2 class='list-title-h2 me-2'>" + e.currentTarget.value + "</h2>"
    })
}