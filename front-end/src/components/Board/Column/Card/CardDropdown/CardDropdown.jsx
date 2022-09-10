import Dropdown from 'react-bootstrap/Dropdown'
import { notification } from 'antd';
import './CardDropdown.css'

export function CardDropdown({ setUpdateColumns }) {

    const openNotificationWithIcon = (type, data) => {
        notification[type]({
            message: data.message
        });
    };

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
            openNotificationWithIcon('info', data)
        })
        setUpdateColumns(true)
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