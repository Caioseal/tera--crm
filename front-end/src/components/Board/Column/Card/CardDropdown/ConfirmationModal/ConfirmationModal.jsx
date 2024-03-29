import { Modal, Button } from 'antd';
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react';
import { notification } from 'antd';

export function ConfirmationModal({ setUpdateColumns, columnId }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalText, setModalText] = useState('Tem certeza que deseja excluir essa coluna?');
    const [placeholder, setPlaceholder] = useState('')

    const openNotificationWithIcon = (type, data) => {
        notification[type]({
            message: data.message
        })
    }

    const showModal = async (e) => {
        setVisible(true);
        await fetch(`https://tera-crm-back-end.herokuapp.com/getColumnById/${columnId}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(async data => {
                await setPlaceholder(data)
            })
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
        await updatePositions(placeholder)
        await fetch(`https://tera-crm-back-end.herokuapp.com/deleteColumnById/${placeholder._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                openNotificationWithIcon('info', data)
            })
        setUpdateColumns(true)
    }

    async function updatePositions(placeholder) {
        await fetch(`https://tera-crm-back-end.herokuapp.com/getColumnById/${placeholder._id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(async placeholderObject => {
                await fetch(`https://tera-crm-back-end.herokuapp.com/getAllColumns`, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(data => {
                        data.map(async (column) => {

                            if (placeholderObject.position < column.position && column._id !== placeholderObject.columnId) {
                                await fetch(`https://tera-crm-back-end.herokuapp.com/updateColumnById/${column._id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        id: column._id,
                                        position: column.position - 1
                                    })
                                }).then(res => res.json())
                                    .then(data => {
                                        setUpdateColumns(true)
                                    })
                            }
                        }
                        )
                    })
            })
    }

    async function getCardsByColumnId() {
        await fetch(`https://tera-crm-back-end.herokuapp.com/getColumnById/${placeholder._id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                const cardList = data.cardList
                cardList.forEach(card => {
                    deleteCard(card)
                })
            })
    }

    async function deleteCard(cardId) {
        await fetch(`https://tera-crm-back-end.herokuapp.com/deleteCard/${cardId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
            })
        setUpdateColumns(true)
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
