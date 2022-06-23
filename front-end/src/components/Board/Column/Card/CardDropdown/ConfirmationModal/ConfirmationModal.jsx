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
        console.log("Placeholder: " + placeholder + "ColumnId: " + columnId)
        console.log(placeholder.columnId)
    };

    const handleOk = () => {
        setModalText('Tem certeza que deseja excluir essa coluna?');
        setLoading(true);
        deleteColumn()
        setTimeout(() => {
            setVisible(false);
            setLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const deleteColumn = () => {
        console.log('Vamos deletar a coluna')
        console.log(placeholder)
        console.log(placeholder.columnId)

        fetch(`http://localhost:3000/deleteColumnById/${placeholder.columnId}`, {
            method: 'DELETE'
        })
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
