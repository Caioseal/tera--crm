import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';


export function ModalNewBusiness() {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <a className="new-card d-flex justify-content-around align-items-center" id="newClient" onClick={showModal} type='primary'>

                <PlusCircleOutlined />
                <p id='newBusiness'>Novo Negócio</p>
            </a>

            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={'75%'}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};
