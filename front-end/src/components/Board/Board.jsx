import { useState, useEffect } from 'react'

import { Column } from './Column/Column'

import './Board.css'

export function Board() {
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/getAllColumns')
            .then(res => res.json())
            .then(data => { setColumns(data) })
    }, [])

    return (
        <div className="board">

            {columns.map((column) =>
                    <Column
                        key={column._id}
                        id={column._id}
                        name={column.name}
                        cardList={column.cardList}
                        createAt={column.createAt}
                    />
                )
            }

        </div>
    )
}
