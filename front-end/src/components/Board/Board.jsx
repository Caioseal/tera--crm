import { useState, useEffect } from 'react'

import { Column } from './Column/Column'

import './Board.css'

export function Board() {
    const [columns, setColumns] = useState([])
    const [update, setUpdate] = useState(false)

    const [cardId, setCardId] = useState('')
    const [oldColumnId, setOldColumnId] = useState('')

    

    useEffect(() => {
        getAllColumns()
    }, [update])

    async function getAllColumns() {
        await fetch('http://localhost:3000/getAllColumns')
            .then(res => res.json())
            .then(data => { setColumns(data) })
        setUpdate(false)
    }

    async function moveCardtoAnotherColumnInDatabase(newColumnId) {
        await fetch(`http://localhost:3000/moveCardtoAnotherColumn/`, {
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
            .then(data => {
                console.log(data.message)
                setUpdate(true)
            })
        setCardId('')
        setOldColumnId('')
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
                    createAt={column.createAt}
                    setUpdate={setUpdate}
                    setCardId={setCardId}
                    setOldColumnId={setOldColumnId}
                    moveCardtoAnotherColumnInDatabase={moveCardtoAnotherColumnInDatabase}
                />
            )}
        </div>
    )
}
