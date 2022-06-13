import { useState, useEffect } from 'react'

import { DropdownMenu } from './Dropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card/Card'
import { ModalForm } from './Modal/ModalForm'

import './Column.css'

export function Column() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://62a66cee430ba53411d49d16.mockapi.io/TeraCRM/cards')
            .then(res => res.json())
            .then(data => { setCards(data) })
        setLoading(false)
    }, [])

    console.log(cards)

    return (
        <div className="list-wrapper">
            <div className="list-content">
                <div className="list-title container d-flex justify-content-between">
                    <h2 className="list-title-h2 me-2 column-title">Sem contato</h2>
                    <DropdownMenu />
                    <PlusCircleOutlined className='button-transition' />
                </div>

                <section className="container d-flex justify-content-center">
                    <h3 className='total'>R$ 300,00</h3>
                </section>

                <div className="list-card">

                    {loading
                        ? 'Carregando'
                        : cards.map((card) =>
                            <Card
                                key={card.id}
                                formPriority={card.dogName}
                            />
                        )
                    }

                </div>
                <ModalForm />
            </div>
        </div>
    )
}