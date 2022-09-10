import { DollarOutlined, CalendarOutlined } from '@ant-design/icons'
import { CardDropdown } from './CardDropdown/CardDropdown'
import React from 'react'

import './Card.css'

const priorityList = {
    "low": "Baixa prioridade",
    "medium": "Média prioridade",
    "high": "Alta prioridade"
}

export function Card(
    {   id = '',
        registerType = 'Pessoa física',
        formPriority = '',
        documentNumber = '',
        fullName = '',
        companyName = '',
        productType = '',
        priority = '',
        productPrice = 0,
        nextContact = '',
        preferedContact = '',
        action = '',
        comment = '',
        setUpdateColumns,
        setCardId,
        setOldColumnId,
        showViewModeModal,
    }) {

        function dragStart(e) {
            const oldColumnId = e.target.parentElement.id
            setOldColumnId(oldColumnId)
            const cardId = e.target.id
            setCardId(cardId)
            e.dataTransfer.setData('card_id', e.target.id)
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.dropEffect = "move"
        }

        let dateFormatted = ''

        try {
            const dateSplited = nextContact.split('-')
            dateFormatted = dateSplited[2].substring(0,2) + '/' + dateSplited[1] + '/' + dateSplited[0]
        } catch (e) {
            console.log(e)
        }
    
    return (
        <div className="list-item"
        id={id}
        draggable={true}
        onDragStart={dragStart}
        >
            <span className='displayNone'>{id}</span>

            <div className={`list-item-priority ${formPriority}`} onClick={(showViewModeModal) }>
                {priorityList[formPriority] || priorityList.high }
            </div>

            <div className="list-item-name">
                <h3 className="client-name">{productType}</h3>
                <CardDropdown setUpdateColumns={setUpdateColumns} />
            </div>

            <h4 className="client-name">{fullName}</h4>

            <h4 className="client-company">{companyName}</h4>

            <div className="list-item-name-align">
                <DollarOutlined />
                &nbsp;{productPrice.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
            </div>

            <div className="list-item-name-align">
                <CalendarOutlined />
                &nbsp;{dateFormatted}
            </div>
        </div>
    )
}