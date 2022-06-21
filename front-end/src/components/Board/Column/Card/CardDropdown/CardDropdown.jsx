import Dropdown from 'react-bootstrap/Dropdown'

import './CardDropdown.css'

export function CardDropdown() {
    return (
        <Dropdown id="card-dropdown">
            <Dropdown.Toggle variant='link' >
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
                <Dropdown.Item >Editar negócio</Dropdown.Item>
                <Dropdown.Item >Excluir negócio</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}