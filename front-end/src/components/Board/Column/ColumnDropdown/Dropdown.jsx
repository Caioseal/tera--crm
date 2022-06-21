import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

import './Dropdown.css'

function editColumnName(e) {
    let placeholder = e.target

    let columnName = placeholder.parentElement.parentElement.previousElementSibling
    let columnName1 = columnName.firstElementChild
    columnName.innerHTML = "<div><input type='text' id='inputNameColumn' value='" + columnName.innerText + "'></div>"
    document.getElementById('inputNameColumn').focus()
    document.getElementById('inputNameColumn').addEventListener('blur', (e) => {
        columnName.innerHTML = "<h2 class='list-title-h2 me-2'>" + e.currentTarget.value + "</h2>"
    })
}

export function DropdownMenu() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='link' id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
                <Dropdown.Item >Adicionar coluna</Dropdown.Item>
                <Dropdown.Item onClick={editColumnName}>Editar nome </Dropdown.Item>
                <Dropdown.Item >Excluir coluna</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
