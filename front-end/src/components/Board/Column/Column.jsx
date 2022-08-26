import { DropdownMenu } from './ColumnDropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card/Card'
import { ModalForm } from './Modal/ModalForm'
import { useEffect, useState } from 'react'

import './Column.css'

export function Column(
    {
        id = '',
        name = '',
        cardList = [],
        createAt = '',
        setUpdate,
        setCardId,
        setOldColumnId,
        moveCardtoAnotherColumnInDatabase,
        updateColumnTotal,
        setUpdateColumnTotal,
        cardData,
        setCardData,
        cardViewMode,
        setCardViewMode
    }
) {
    const [columnTotal, setColumnTotal] = useState(0)

    const [modalVisible, setModalVisible] = useState(false);

    async function showViewModeModal(e) {
        const cardId = e.currentTarget.previousElementSibling.innerText
        
        setCardViewMode(true)

        await fetch(`http://localhost:3000/card/${cardId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setModalVisible(true)
            showData(data)
        })
        console.log(cardViewMode)
    }

    function showData(data) {
        document.getElementById('formCustomerType').value = data.registerType
        document.getElementById('formDocumentNumber').value = data.documentNumber
        document.getElementById('formFullName').value = data.fullName
        document.getElementById('formCompanyName').value = data.companyName
        document.getElementById('formProductChoosen').value = data.productType
        document.getElementById('formPriority').value = data.priority
        document.getElementById('formPrice').value = data.productPrice.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })
        document.getElementById('formNextContact').value = data.nextContact
        document.getElementById('formPreferedContact').value = data.preferedContact
        document.getElementById('formNextAction').value = data.action
        document.getElementById('formComments').value = data.comment
    }

    async function drop(e) {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id')
        const newColumnId = e.target.id
        const card = document.getElementById(card_id)
        e.target.appendChild(card)
        moveCardtoAnotherColumnInDatabase(newColumnId)
    }

    function dragOver(e) {
        e.preventDefault()
    }

    useEffect(() => {
        updtColumnTotal()
    }, [updateColumnTotal])

    function updtColumnTotal() {
        let columnTotal = 0
        cardList.map((card) => {
            columnTotal = card.productPrice + columnTotal
        })
        setColumnTotal(columnTotal)
        setUpdateColumnTotal(false)
    }

    async function createColumn(e) {
        const currentColumn = e.currentTarget.parentElement.parentElement.parentElement
        const board = currentColumn.parentElement
        const siblingQuantity = board.children.length
        const boardChildren = board.children
        let position = 0
        let id = ''

        for (let i = 0; i < siblingQuantity; i++) {
            if (boardChildren[i] === currentColumn) {
                position = i + 1
            }
        }
        await fetch(`http://localhost:3000/createColumn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                position: position
            }),
        })
            .then(res => res.json())
            .then(data => {
                id = data._id
            })
        setUpdate(true)
        updatePositions(position, id)
    }

    async function updatePositions(position, id) {
        await fetch(`http://localhost:3000/getAllColumns`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                data.map(async (column) => {
                    if (column.position >= position && column._id !== id) {
                        await fetch(`http://localhost:3000/updateColumnById/${column._id}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: column._id,
                                position: column.position + 1
                            })
                        }).then(res => res.json())
                            .then(data => {
                                setUpdate(true)
                            })
                    }
                })
            })
    }

    return (
        <div className="list-wrapper" id={id}>
            <div className="list-content">
                <div className="list-title container d-flex justify-content-between">
                    <h2 className="list-title-h2 me-2 column-title">{name}</h2>
                    <DropdownMenu setUpdate={setUpdate} columnId={id} />
                    <PlusCircleOutlined className='button-transition' onClick={(e) => createColumn(e)} />
                </div>

                <section className="container d-flex justify-content-center">
                    <h3 className='total'>{columnTotal.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}</h3>
                </section>

                <div className="list-card" onDrop={drop} onDragOver={dragOver} id={id}>

                    {cardList.map((card) =>
                        <Card
                            key={card._id}
                            id={card._id}
                            formPriority={card.priority}
                            productType={card.productType}
                            fullName={card.fullName}
                            companyName={card.companyName}
                            productPrice={card.productPrice}
                            nextContact={card.nextContact}
                            setUpdate={setUpdate}
                            setCardId={setCardId}
                            setOldColumnId={setOldColumnId}
                            setCardViewMode={setCardViewMode}
                            showViewModeModal={showViewModeModal}
                            setModalVisible={setModalVisible}
                        />
                    )}
                </div>
                <ModalForm setUpdate={setUpdate} setCardViewMode={setCardViewMode} cardViewMode={cardViewMode} setModalVisible={setModalVisible} modalVisible={modalVisible} columnId={id} />
            </div>
        </div>
    )
}
