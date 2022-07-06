import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { ConfirmationModal } from '../Card/CardDropdown/ConfirmationModal/ConfirmationModal';
import './Dropdown.css'

function editColumnName(e) {
    let placeholder = e.target
    console.log(placeholder)
    let columnName = placeholder.parentElement.parentElement.previousElementSibling
    console.log(columnName)
    columnName.innerHTML = "<input type='text' id='inputNameColumn' value='" + columnName.innerText + "'>"
    document.getElementById('inputNameColumn').focus()
    document.getElementById('inputNameColumn').addEventListener('blur', (e) => {
        columnName.innerHTML = e.currentTarget.value
        console.log(columnName)
        let columnId = columnName.parentElement.previousElementSibling.previousElementSibling.innerHTML
        let columnTitle = columnName.innerHTML

        fetch(`http://localhost:3000/updateColumnById/${columnId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: columnTitle
            })
        })
    })
}

export function DropdownMenu({ setUpdate }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='link' id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu variant='dark'>
                <Dropdown.Item onClick={editColumnName}>Editar nome </Dropdown.Item>
                <ConfirmationModal setUpdate={setUpdate} />
            </Dropdown.Menu>
        </Dropdown>
    )
}