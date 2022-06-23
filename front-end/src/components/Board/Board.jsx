import { useState, useEffect } from 'react'

import { Column } from './Column/Column'

import './Board.css'

export function Board() {
    const [columns, setColumns] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/getAllColumns')
            .then(res => res.json())
            .then(data => { setColumns(data) })
            setUpdate(false)
    }, [update])

    return (
        <div className="board">

            {columns.map((column) =>
                    <Column
                        key={column._id}
                        id={column._id}
                        name={column.name}
                        cardList={column.cardList}
                        createAt={column.createAt}
                        setUpdate={setUpdate}
                    />
                )
            }

        </div>
    )
}
