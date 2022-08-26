import * as React from "react"
import { Formik } from "formik"
import {
    SubmitButton,
    Input,
    ResetButton,
    Form,
    FormItem,
    InputNumber,
    Select,
    DatePicker,
} from "formik-antd"
import { message, Row, Col } from "antd"

export function FormikForm() {

    const { Option } = Select;

    function validateRequired(value) {
        return value ? undefined : "Obrigatório"
    }

    return (
        <Formik
            initialValues={{
                formCustomerType: "Pessoa física",
                formDocumentNumber: "",
                formFullName: "",
                formCompanyName: "",
                formProductChoosen: "Passagem para Recife",
                formPriority: "low",
                formProductPrice: "",
                formNextContact: "",
                formPreferedContact: "WhatsApp",
                formComments: ""
            }}
            onSubmit={(values, actions) => {
                message.info(JSON.stringify(values, null, 4))
                console.log(values)
                actions.setSubmitting(false)
                actions.resetForm()
            }}
            validate={values => {
                /* if (!values.formDocumentNumber) {
                     return { formDocumentNumber: "Obrigatório" }
                 }
                 if (!values.formFullName) {
                     return { formFullName: "Obrigatório" }
                 }
                 if (!values.formCompanyName) {
                     return { formCompanyName: "Obrigatório" }
                 }
                 if (!values.formProductPrice) {
                     return { formProductPrice: "Obrigatório" }
                 }
                 if (!values.formNextContact) {
                     return { formNextContact: "Obrigatório" }
                 }*/
                return {}
            }}
            render={() => (
                <Form
                    layout={'vertical'}
                >
                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formCustomerType'}
                                label={'Tipo de Cadastro'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Select
                                    name='formCustomerType'
                                    defaultValue={'Pessoa física'}
                                >
                                    <Option value="Pessoa física">Pessoa física</Option>
                                    <Option value="Pessoa jurídica">Pessoa jurídica</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formDocumentNumber'}
                                label={'CPF'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Input
                                    name={'formDocumentNumber'}
                                    placeholder="000.000.000-00"
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formFullName'}
                                label={'Nome completo'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Input
                                    name={'formFullName'}
                                    placeholder={'Nome completo'}
                                />
                            </FormItem>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formCompanyName'}
                                label={'Empresa'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Input
                                    name={'formCompanyName'}
                                    placeholder={'Empresa Ltda.'}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formProductChoosen'}
                                label={'Produto'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Select
                                    name='formProductChoosen'
                                    defaultValue={'Passagem para Recife'}
                                >
                                    <Option value="Passagem para Recife">Passagem para Recife</Option>
                                    <Option value="Hospedagem em Gramado">Hospedagem em Gramado</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <FormItem
                                name={'formPriority'}
                                label={'Prioridade'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Select
                                    name='formPriority'
                                    defaultValue={'low'}
                                    style={{ width: "135%" }}
                                >
                                    <Option value="low">Baixa prioridade</Option>
                                    <Option value="medium">Média prioridade</Option>
                                    <Option value="high">Alta prioridade</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formProductPrice'}
                                label={'Valor'}
                                required={true}
                                validate={validateRequired}

                            >
                                <InputNumber
                                    name={'formProductPrice'}
                                    placeholder={'R$ 300,00'}
                                    style={{ width: "100%" }}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formNextContact'}
                                label={'Contato'}
                                required={true}
                                validate={validateRequired}
                            >
                                <DatePicker
                                    name={'formNextContact'}
                                    placeholder={'Próximo contato'}
                                />
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <FormItem
                                name={'formPreferedContact'}
                                label={'Forma de contato'}
                                required={true}
                                validate={validateRequired}
                            >
                                <Select
                                    name='formPreferedContact'
                                    defaultValue={'WhatsApp'}
                                >
                                    <Option value="WhatsApp">WhatsApp</Option>
                                    <Option value="Ligação">Ligação</Option>
                                    <Option value="E-mail">E-mail</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>

                    <Row justify='start' gutter={[8, 8]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <FormItem
                                name={'formComments'}
                                label={'Comentários'}
                            >
                                <Input.TextArea name={'formComments'} rows={1} />
                            </FormItem>
                        </Col>
                    </Row>

                    <Row justify="end">
                        <Col>
                            <ResetButton>Limpar</ResetButton>
                            <SubmitButton>Salvar</SubmitButton>
                        </Col>
                    </Row>
                </Form>
            )}
        />
    )
}
