import Dropdown from 'react-bootstrap/Dropdown'

import './CardDropdown.css'

export function CardDropdown({ setUpdate }) {

    function deleteCard(e) {
        const cardId = e.currentTarget.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText
        console.log(cardId)

        fetch(`http://localhost:3000/deleteCard/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        setUpdate(true)
    }

        return (
            <Dropdown id="card-dropdown">
                <Dropdown.Toggle variant='link' >
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                    <Dropdown.Item onClick={() => console.log('cliquei no editar')} >Editar negócio</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => deleteCard(e)}>Excluir negócio</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }