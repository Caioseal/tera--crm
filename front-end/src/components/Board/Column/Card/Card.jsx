import { useState } from 'react'
import { EllipsisOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons'

import './Card.css'

export function Card(
    { id = '',
        registerType = 'Pessoa física',
        formPriority = '',
        documentNumber = '',
        fullName = '',
        companyName = '',
        productType = '',
        priority = '',
        productPrice = '',
        nextContact = '',
        preferedContact = '',
        action = '',
        comment = '',
    }) {
    
    return (
        <div className="list-item">

            <div className={`list-item-priority ${formPriority}`}>
                {formPriority === 'low' ? 'Baixa prioridade' : formPriority ==='medium' ? 'Média prioridade' : 'Alta prioridade'}
            </div>

            <div className="list-item-name">
                <h3 className="client-name">{productType}</h3>
                <EllipsisOutlined id='EllipsisOutlined' />
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