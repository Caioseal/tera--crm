import Form from 'react-bootstrap/Form';
import { Row, Col } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

export function UserForm() {
    const [user, setUser] = useState('');

    useEffect( () => {
        showUserData();
    }, []);

    async function showUserData() {
        const id = localStorage.getItem('id');
        await fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
    }

    return (
        <>
            <Form>
                <Row justify='start' gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Group className="mb-3" controlId="formUserName" >
                            <Form.Label >Nome</Form.Label>
                            <Form.Control type="text" defaultValue={user.full_name} />
                        </Form.Group>

                    </Col>
                </Row>

                <Row justify='start' gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Group className="mb-3" controlId="formUserEmail">
                            <Form.Label id='form-cpf-label'>E-mail</Form.Label>
                            <Form.Control type="text" defaultValue={user.email} />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row justify='start' gutter={[8, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Group className="mb-3" controlId="formUserNewPassword">
                            <Form.Label id='form-cpf-label'>Nova Senha</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
};