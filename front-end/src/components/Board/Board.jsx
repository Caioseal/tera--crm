import { Column } from './Column/Column'

import './Board.css'

export function Board() {
    return (
        <div className="board">
            <Column />
        </div>
    )
}

/* 
<div className='container'><div class="d-flex align-items-center m-3">
                    <button type="button" class="btn btn-primary d-flex align-items-center ">
                        <PlusOutlined id='button-add' />
                        <p id='textoParagrafo'>Adicionar</p>
                    </button>
                </div>*/