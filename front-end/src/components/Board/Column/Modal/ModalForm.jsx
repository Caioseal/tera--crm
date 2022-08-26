import React, { useState } from 'react';
import { Modal } from 'antd';
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { NewBusinessForm } from './NewBusinessForm';

import { FormikForm } from './FormikForm/FormikForm';

import './ModalForm.css';

export function ModalForm({ setUpdate, setCardViewMode, modalVisible, setModalVisible, columnId, cardViewMode }) {
    
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [modalText, setModalText] = useState(<FormikForm/>);
    //const [modalText, setModalText] = useState(<NewBusinessForm setConfirmLoading={setConfirmLoading} setModalVisible={setModalVisible} newCard={newCard} setCardViewMode={setCardViewMode} cardViewMode={cardViewMode} />);

    function showModal(e) {      
        setModalVisible(true);
    }

    function newCard() {
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

        fetch(`http://localhost:3000/newCardByColumnId/${columnId}`, {
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
            setUpdate(true)
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
                style={{ top: 20 }}
                visible={modalVisible}
                cardViewMode={cardViewMode}
                confirmLoading={confirmLoading}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <>{modalText}</>
            </Modal>
        </>
    );
};
