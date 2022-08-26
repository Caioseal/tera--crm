import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'antd'
import { useState } from 'react'

export function NewBusinessForm({ setConfirmLoading, setModalVisible, newCard, setCardViewMode, cardViewMode }) {

    const [validated, setValidated] = useState(false)
    const [maxLength, setMaxLength] = useState('')

    const handleOk = (e) => {
        const form = e.currentTarget
        console.log(form)
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setConfirmLoading(true);
            setTimeout(() => {
                setModalVisible(false);
                setConfirmLoading(false);
            }, 2000);
            newCard()
        }
        setValidated(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
        setCardViewMode(false)

        console.log(cardViewMode)

        document.getElementById('formDocumentNumber').value = ''
        document.getElementById('formFullName').value = ''
        document.getElementById('formCompanyName').value = ''
        document.getElementById('formPrice').value = ''
        document.getElementById('formNextContact').value = ''
        document.getElementById('formComments').value = ''
    }

    function changeCPFlabel() {
        if (document.getElementById('formCustomerType') !== null) {
            let formCustomerType = document.getElementById('formCustomerType').value

            if (formCustomerType === 'Pessoa física') {
                document.getElementById('form-cpf-label').innerHTML = 'CPF';
                document.getElementById('formDocumentNumber').placeholder = '000.000.000-00'
            } else {
                document.getElementById('form-cpf-label').innerHTML = 'CNPJ';
                document.getElementById('formDocumentNumber').placeholder = '00.000.000/0000-00'
            }
        }
    }

    function maskCPF_CNPJ() {
        var documentNumber = document.getElementById('formDocumentNumber')

        if (document.getElementById('formCustomerType').value === 'Pessoa física') {
            setMaxLength(14)
            if (documentNumber.value.length === 3 || documentNumber.value.length === 7) {
                documentNumber.value += "."
            } else if (documentNumber.value.length === 11) {
                documentNumber.value += "-"
            }
        } else if (document.getElementById('formCustomerType').value === 'Pessoa jurídica') {
            setMaxLength(18)
            if (documentNumber.value.length === 2 || documentNumber.value.length === 6) {
                documentNumber.value += "."
            }
            else if (documentNumber.value.length === 10) {
                documentNumber.value += "/"
            }
            else if (documentNumber.value.length === 15) {
                documentNumber.value += "-"
            }
        }
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleOk}>
                <fieldset disabled={cardViewMode ? 'true' : ''}>
                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formCustomerType" >
                                <Form.Label >Tipo de Cadastro</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={() => changeCPFlabel()}>
                                    <option defaultChecked value="Pessoa física">Pessoa física</option>
                                    <option value="Pessoa jurídica">Pessoa jurídica</option>
                                </Form.Select>
                            </Form.Group>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formDocumentNumber">
                                <Form.Label id='form-cpf-label'>CPF</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="000.000.000-00"
                                    autoComplete='off'
                                    maxLength={maxLength}
                                    onKeyUp={maskCPF_CNPJ}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nome completo" />
                            </Form.Group>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formCompanyName">
                                <Form.Label>Empresa</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Empresa S.A." />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formProductChoosen">
                                <Form.Label>Produto</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="Passagem para Recife">Passagem para Recife</option>
                                    <option value="Hospedagem em Gramado">Hospedagem em Gramado</option>
                                </Form.Select>
                            </Form.Group>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formPriority">
                                <Form.Label>Prioridade</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option defaultChecked value="low">Baixa prioridade</option>
                                    <option value="medium">Média prioridade</option>
                                    <option value="high">Alta prioridade</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Valor</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="R$ 300,00" />
                            </Form.Group>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formNextContact">
                                <Form.Label>Data do próximo contato</Form.Label>
                                <Form.Control required type="date" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formPreferedContact">
                                <Form.Label>Forma de contato</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="E-mail">E-mail</option>
                                    <option value="Ligação">Ligação</option>
                                </Form.Select>
                            </Form.Group>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Form.Group className="mb-3" controlId="formNextAction">
                                <Form.Label>Proxima ação</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="Enviar cotação">Enviar cotação</option>
                                    <option value="Questionar necessidade">Questionar necessidade</option>
                                    <option value="Confirmar produto escolhido">Confirmar produto escolhido</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24}>
                            <Form.Group className="mb-3" controlId="formComments">
                                <Form.Label>Comentários</Form.Label>
                                <Form.Control as="textarea" rows={1} />
                            </Form.Group>
                        </Col>
                    </Row>
                </fieldset>
                <Row justify='end'>
                    {cardViewMode ? '<Button variant="secondary">Editar</Button>' : ''}
                    <Button variant="secondary" onClick={handleCancel}>Cancelar</Button>
                    <Button variant="primary" className='ms-2' type="submit">Salvar</Button>
                </Row>
            </Form>
        </>
    )
}