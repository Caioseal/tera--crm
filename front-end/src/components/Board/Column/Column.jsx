import { DropdownMenu } from './Dropdown/Dropdown'
import PlusCircleOutlined from '@ant-design/icons/lib/icons/PlusCircleOutlined'
import { Card } from './Card'
import { ModalForm } from './Modal/Form'

import './Column.css'

export function Column() {



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
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <ModalForm />
            </div>
        </div>
    )
}