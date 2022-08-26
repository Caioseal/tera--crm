import { Modal, Col, Button } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { UserForm } from './UserForm/UserForm';

export function UserModal() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [user, setUser] = useState('');

	useEffect(() => {
		showUserName();
	}, []);

	function showUserName() {
		let user = localStorage.getItem('user')
		user = JSON.parse(user).split(' ')
		user = user[0]
		setUser(user)
	}

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		updateUserData();
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	async function updateUserData() {
		const id = localStorage.getItem('id');
		let requestUser

		await fetch(`http://localhost:3000/getUserById/${id}`)
			.then(res => res.json())
			.then(data => {
				requestUser= data;
			})
		
		if (requestUser.full_name !== document.getElementById('formUserName').value) {
			await fetch(`http://localhost:3000/updateUserById/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					full_name: document.getElementById('formUserName').value
				})
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
				})
		}
		
		if (requestUser.email !== document.getElementById('formUserEmail').value) {
			console.log(document.getElementById('formUserEmail').value)
			await fetch(`http://localhost:3000/updateUserById/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: document.getElementById('formUserEmail').value
				})
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
				})
		}

		if (requestUser.password !== document.getElementById('formUserNewPassword').value) {
			await fetch(`http://localhost:3000/updateUserById/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					password: document.getElementById('formUserNewPassword').value
				})
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
				})
		}
	}

	return (
		<>
			<Col span={18} onClick={showModal}>
				<p className='userName'><span id='userName'>{user}</span></p>
			</Col>
			<Modal
				title="Meu perfil"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Cancelar
					</Button>,
					<Button key="submit" type="primary" onClick={handleOk}>
						Atualizar dados
					</Button>
				]}
			>
				<UserForm />
			</Modal>
		</>
	);
};