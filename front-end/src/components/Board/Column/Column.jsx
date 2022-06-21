import { DropdownMenu } from './ColumnDropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card/Card'
import { ModalForm } from './Modal/ModalForm'

import './Column.css'

export function Column(
    {
        id = '',
        name = '',
        columnTotal = 0,
        cardList = [],
        createAt = ''
    }
) {

    cardList.map((card) => {
        columnTotal += card.productPrice
    })

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <span className='displayNone'>{id}</span>
                <span className='displayNone'>{createAt}</span>
                <div className="list-title container d-flex justify-content-between">
                    <h2 className="list-title-h2 me-2 column-title">{name}</h2>
                    <DropdownMenu />
                    <PlusCircleOutlined className='button-transition' onClick={() => console.log('cliquei')} />
                </div>

                <section className="container d-flex justify-content-center">
                    <h3 className='total'>R${columnTotal},00</h3>
                </section>

                <div className="list-card">

                    {cardList.map((card) =>
                        <Card
                            key={card._id}
                            id={card._id}
                            formPriority={card.priority}
                            productType={card.productType}
                            fullName={card.fullName}
                            companyName={card.companyName}
                            productPrice={card.productPrice}
                            nextContact={card.nextContact}
                        />
                    )}
                </div>
                <ModalForm />
            </div>
        </div>
    )
}
