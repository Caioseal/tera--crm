import { DollarOutlined, CalendarOutlined } from '@ant-design/icons'
import { CardDropdown } from './CardDropdown/CardDropdown'

import './Card.css'

const priorityList = {
    "low": "Baixa prioridade",
    "medium": "Média prioridade",
    "high": "Alta prioridade"
}

export function Card(
    { id = '',
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
        setUpdate,
        setCardId,
        setOldColumnId,
        setModalVisible
    }) {

        function dragStart(e) {
            const oldColumnId = e.target.parentElement.id
            setOldColumnId(oldColumnId)
            const cardId = e.target.id
            setCardId(cardId)
            e.dataTransfer.setData('card_id', e.target.id)
        }
    
        function dragOver(e) {
            e.dataTransfer.dropEffect = "move"
            e.stopPropagation();
        }
    
    return (
        <div className="list-item"
        id={id}
        draggable={true}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <span className='displayNone'>{id}</span>

            <div className={`list-item-priority ${formPriority}`} onClick={() => setModalVisible(true)}>
                {priorityList[formPriority] || priorityList.high }
            </div>

            <div className="list-item-name">
                <h3 className="client-name">{productType}</h3>
                <CardDropdown setUpdate={setUpdate} />
            </div>

            <h4 className="client-name">{fullName}</h4>

            <h4 className="client-company">{companyName}</h4>

            <div className="list-item-name-align">
                <DollarOutlined />
                &nbsp;R$&nbsp;{productPrice},00
            </div>

            <div className="list-item-name-align">
                <CalendarOutlined />
                &nbsp;31/12/2000
            </div>
        </div>
    )
}