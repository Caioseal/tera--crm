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
                />
            )
            }

        </div>
    )
}
