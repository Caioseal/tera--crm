import React, { useState } from 'react';
import { Modal } from 'antd';
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { NewBusinessForm } from './NewBusinessForm';
import { Card } from '../Card/Card';

import './ModalForm.css';

export function ModalForm() {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(<NewBusinessForm />);
    const [placeholder, setPlaceholder] = useState('')

    function showModal(e) {
        setVisible(true);
        setPlaceholder(e.currentTarget.previousElementSibling)
    };

    function handleOk(e) {
        setModalText(<NewBusinessForm />);
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
        newCard(e.currentTarget)
    };

    const handleCancel = () => {
        setVisible(false);
    };

    function newCard(e) {
        const formCustomerType = document.getElementById('formCustomerType').value;
        const formDocumentNumber = document.getElementById('formDocumentNumber').value;
        const formFullName = document.getElementById('formFullName').value;
        const formCompanyName = document.getElementById('formCompanyName').value;
        const formProductChoosen = document.getElementById('formProductChoosen').value;
        const formPriority = document.getElementById('formPriority').value;
        const formPrice = document.getElementById('formPrice').value;
        const formNextContact = document.getElementById('formNextContact').value;
        const formPreferedContact = document.getElementById('formPreferedContact').value;
        const formNextAction = document.getElementById('formNextAction').value;
        const formComments = document.getElementById('formComments').value;

        fetch('http://localhost:3000/createCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                registerType: formCustomerType,
                documentNumber: formDocumentNumber,
                fullName: formFullName,
                companyName: formCompanyName,
                productType: formProductChoosen,
                priority: formPriority,
                productPrice: formPrice,
                nextContact: formNextContact,
                preferedContact: formPreferedContact,
                action: formNextAction,
                comment: formComments,
            })
        })
    }

    return (
        <>
            <div className='new-card'>
                <a className=" d-flex justify-content-around align-items-center" id="newClient" onClick={showModal} type='primary'>
                    <PlusCircleOutlined />
                    <p id='newBusiness'>Novo Negócio</p>
                </a>
            </div>

            <Modal
                title="Novo Negócio"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={'80%'}
            >

                <>{modalText}</>

            </Modal>
        </>
    );
};
