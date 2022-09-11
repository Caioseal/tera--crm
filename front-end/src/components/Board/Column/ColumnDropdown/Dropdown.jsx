import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { ConfirmationModal } from '../Card/CardDropdown/ConfirmationModal/ConfirmationModal';
import './Dropdown.css'


export function DropdownMenu({ setUpdateColumns, columnId }) {

    function editColumnName(e) {
        let placeholder = e.target
        let columnName = placeholder.parentElement.parentElement.previousElementSibling
        columnName.innerHTML = "<input type='text' id='inputNameColumn' value='" + columnName.innerText + "'>"
        document.getElementById('inputNameColumn').focus()
        document.getElementById('inputNameColumn').addEventListener('blur', (e) => {
            columnName.innerHTML = e.currentTarget.value
            let columnTitle = columnName.innerHTML
    
            fetch(`https://tera-crm-back-end.herokuapp.com/updateColumnById/${columnId}`, {
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

    return (
        <Dropdown>
            <Dropdown.Toggle variant='link' id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu variant='dark'>
                <Dropdown.Item onClick={editColumnName}>Editar nome</Dropdown.Item>
                <ConfirmationModal setUpdateColumns={setUpdateColumns} columnId={columnId} />
            </Dropdown.Menu>
        </Dropdown>
    )
}