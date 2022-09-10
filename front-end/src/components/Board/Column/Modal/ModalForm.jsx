import React, { useState } from 'react';
import { Modal } from 'antd';
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'

import { FormikForm } from './FormikForm/FormikForm';

import './ModalForm.css';

export function ModalForm(
    {
        setUpdate,
        modalVisible,
        setModalVisible,
        columnId,
        cardViewMode,
    }
) {

    const [modalText, setModalText] = useState(<FormikForm newCard={newCard} setModalVisible={setModalVisible} cardViewMode={cardViewMode} />);

    function showModal(e) {
        setModalVisible(true);
    }

    async function newCard(values) {
        await fetch(`http://localhost:3000/newCardByColumnId/${columnId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                registerType: values.formCustomerType,
                documentNumber: values.formDocumentNumber,
                fullName: values.formFullName,
                companyName: values.formCompanyName,
                productType: values.formProductChoosen,
                priority: values.formPriority,
                productPrice: values.formProductPrice,
                nextContact: values.formNextContact,
                preferedContact: values.formPreferedContact,
                action: values.formNextAction,
                comment: values.formComments,
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
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <>{modalText}</>
            </Modal>
        </>
    );
};
