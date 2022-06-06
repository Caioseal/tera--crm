import { EllipsisOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons'

import './Card.css'

export function Card() {
    return (
        <div className="list-item">

            <div className="list-item-priority low">
                Baixa prioridade
            </div>

            <div className="list-item-name">
                <h3 className="client-name">Pacote para Gramado</h3>
                <EllipsisOutlined id='EllipsisOutlined' />
            </div>

            <h4 className="client-name">Chris Rock</h4>
      
            <h4 className="client-company">Bradesco S.A.</h4>

            <div className="list-item-name-align">
            <DollarOutlined />
                &nbsp;R$ 300,00
            </div>

            <div className="list-item-name-align">
            <CalendarOutlined />
                &nbsp;31/12/2000
            </div>
        </div>
    )
}