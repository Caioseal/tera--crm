import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { ConfirmationModal } from '../Card/CardDropdown/ConfirmationModal/ConfirmationModal';
import './Dropdown.css'

function editColumnName(e) {
    let placeholder = e.target
    let columnName = placeholder.parentElement.parentElement.previousElementSibling
    columnName.innerHTML = "<div><input type='text' id='inputNameColumn' value='" + columnName.innerText + "'></div>"
    document.getElementById('inputNameColumn').focus()
    document.getElementById('inputNameColumn').addEventListener('blur', (e) => {
        columnName.innerHTML = "<h2 class='list-title-h2 me-2'>" + e.currentTarget.value + "</h2>"
    })
}

export function DropdownMenu({ setUpdate }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='link' id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
                <Dropdown.Item onClick={editColumnName}>Editar nome </Dropdown.Item>
                <ConfirmationModal setUpdate={setUpdate}  />
            </Dropdown.Menu>
        </Dropdown>
    )
}