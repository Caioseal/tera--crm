import { Modal, Button } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';

export function ConfirmationModal({ setUpdate }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalText, setModalText] = useState('Tem certeza que deseja excluir essa coluna?');
    const [placeholder, setPlaceholder] = useState('')

    const showModal = (e) => {
        setVisible(true);
        const columnId = e.currentTarget.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText
        setPlaceholder({ columnId })
        console.log(columnId)
    };

    const handleOk = () => {
        setModalText('Tem certeza que deseja excluir essa coluna?');
        setLoading(true);
        getCardsByColumnId()
        deleteColumn()
        setTimeout(() => {
            setVisible(false);
            setLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    async function deleteColumn() {
        await fetch(`http://localhost:3000/deleteColumnById/${placeholder.columnId}`, {
            method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        setUpdate(true)
    }

    async function getCardsByColumnId() {
        await fetch(`http://localhost:3000/getColumnById/${placeholder.columnId}`, {
            method: 'GET'})
            .then(res => res.json())
            .then(data => {
                const cardList = data.cardList
                cardList.forEach(card => {
                    console.log(card)
                    deleteCard(card)
                })
            })
    }

    async function deleteCard(cardId) {
        await fetch(`http://localhost:3000/deleteCard/${cardId}`, {
        method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    setUpdate(true)
    }

    return (
        <>
            <Dropdown.Item onClick={showModal}>Excluir coluna</Dropdown.Item>

            <Modal
                title="Só para confirmar..."
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    [
                        <Button
                            key="handleCancel"
                            type="primary"
                            onClick={handleCancel}
                        >
                            Não! Apertei errado
                        </Button>,

                        <Button
                            key="handleOk"
                            type="secundary"
                            loading={loading}
                            onClick={handleOk}
                        >
                            Sim! Excluir tudo
                        </Button>
                    ]
                }
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};
