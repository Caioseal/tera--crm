import { useState, useEffect } from 'react'

import { Column } from './Column/Column'

import './Board.css'

export function Board() {
    const [columns, setColumns] = useState([])
    const [updateColumns, setUpdateColumns] = useState(false)

    const [cardId, setCardId] = useState('')
    const [oldColumnId, setOldColumnId] = useState('')

    useEffect(() => {
        getAllColumns()
    }, [updateColumns])

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: { 'Content-Type': 'application/json' }
    }

    async function getAllColumns() {
        await fetch('https://tera-crm-back-end.herokuapp.com/getAllColumns/', options)
            .then(res => res.json())
            .then(data => { setColumns(data) })
        setUpdateColumns(false)
    }

    async function moveCardtoAnotherColumnInDatabase(newColumnId) {
        if (newColumnId !== undefined) {
            await fetch(`https://tera-crm-back-end.herokuapp.com/moveCardtoAnotherColumn/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cardId: cardId,
                    oldColumnId: oldColumnId,
                    newColumnId: newColumnId
                })
            }).then(res => res.json())
                .then (data => {
                    setCardId('')
                    setOldColumnId('')
                })
        }
    }

    return (
        <div className="board">

            {columns.sort((a, b) => {
                let aPosition = a.position;
                let bPosition = b.position;
                if (aPosition < bPosition) {
                    return -1;
                }
                if (aPosition > bPosition) {
                    return 1
                }
                return 0;
            }).map((column) =>

                <Column
                    key={column._id}
                    id={column._id}
                    name={column.name}
                    cardList={column.cardList}
                    setUpdateColumns={setUpdateColumns}
                    setCardId={setCardId}
                    setOldColumnId={setOldColumnId}
                    moveCardtoAnotherColumnInDatabase={moveCardtoAnotherColumnInDatabase}
                />

            )}
        </div>
    )
}
