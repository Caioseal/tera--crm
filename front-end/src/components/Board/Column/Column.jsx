import { DropdownMenu } from './ColumnDropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card/Card'
import { ModalForm } from './Modal/ModalForm'
import { useState, useEffect } from 'react'

import './Column.css'

export function Column(
    {
        id = '',
        setUpdateColumns,
        setCardId,
        setOldColumnId,
        moveCardtoAnotherColumnInDatabase,
    }
) {
    const [columnTotal, setColumnTotal] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)

    const [columnName, setColumnName] = useState('')
    const [cardList, setCardList] = useState([])

    useEffect(() => {
        getColumns()
        updtColumnTotal()
    }, [])

    async function getColumns() {
        fetch(`http://localhost:3000/getColumnById/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setColumnName(data.name)
                setCardList(data.cardList)
                console.log(data)
            })
    }

function updtColumnTotal() {
    let columnTotal = 0
    try {
        cardList.map((card) => {
            console.log(columnName + " " + card.productPrice)
            columnTotal = card.productPrice + columnTotal
        })
    } catch (e) {
        console.log(e)
    }
    setColumnTotal(columnTotal)
}

async function drop(e) {
    e.preventDefault()
    const newColumnId = e.target.id
    const card_id = e.dataTransfer.getData('card_id')
    e.target.appendChild(document.getElementById(card_id))
    moveCardtoAnotherColumnInDatabase(newColumnId)
    e.dataTransfer.clearData()
}

function dragOver(e) {
    e.preventDefault()
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
    setUpdateColumns(true)
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
                            setUpdateColumns(true)
                        })
                }
            })
        })
}

return (
    <div className="list-wrapper" id={id}>
        <div className="list-content">
            <div className="list-title container d-flex justify-content-between">
                <h2 className="list-title-h2 me-2 column-title">{columnName}</h2>
                <DropdownMenu
                    setUpdateColumns={setUpdateColumns}
                    columnId={id}
                />
                <PlusCircleOutlined
                    className='button-transition'
                    onClick={(e) => createColumn(e)}
                />
            </div>

            <section className="container d-flex justify-content-center">
                <h3 className='total'>
                    {columnTotal.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })}
                </h3>
            </section>

            <div className="list-card"
                onDrop={drop}
                onDragOver={dragOver}
                id={id}
            >

                {cardList ? cardList.map((card, index) =>
                    <Card
                        key={index}
                        id={card._id}
                        formPriority={card.priority}
                        productType={card.productType}
                        fullName={card.fullName}
                        companyName={card.companyName}
                        productPrice={card.productPrice}
                        nextContact={card.nextContact}
                        setUpdateColumns={setUpdateColumns}
                        setCardId={setCardId}
                        setOldColumnId={setOldColumnId}
                        setModalVisible={setModalVisible}
                    />
                ) : ""}
            </div>

            <ModalForm
                setUpdateColumns={setUpdateColumns}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                columnId={id}
            />

        </div>
    </div>
)
}
