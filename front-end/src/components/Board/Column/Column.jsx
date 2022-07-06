import { DropdownMenu } from './ColumnDropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card/Card'
import { ModalForm } from './Modal/ModalForm'

import './Column.css'

export function Column(
    {
        id = '',
        name = '',
        columnTotal = 0,
        cardList = [],
        createAt = '',
        setUpdate
    }
) {

    cardList.map((card) => {
        columnTotal += card.productPrice
    })

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
                console.log(data)
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

                    if (column.position >= position && column._id !== id){
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
                                console.log(data)
                                setUpdate(true)
                            })
                    }
                })
            })

    }

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <span className='displayNone'>{id}</span>
                <span className='displayNone'>{createAt}</span>
                <div className="list-title container d-flex justify-content-between">
                    <h2 className="list-title-h2 me-2 column-title">{name}</h2>
                    <DropdownMenu setUpdate={setUpdate} />
                    <PlusCircleOutlined className='button-transition' onClick={(e) => createColumn(e)} />
                </div>

                <section className="container d-flex justify-content-center">
                    <h3 className='total'>R${columnTotal},00</h3>
                </section>

                <div className="list-card">

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
                        />
                    )}
                </div>
                <ModalForm setUpdate={setUpdate} />
            </div>
        </div>
    )
}
