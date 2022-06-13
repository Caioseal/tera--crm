import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SignUpForm } from '../SignUpForm/SignUp'

import './LoginForm.css'

export function LoginForm() {
    const [isLogged, setLogin] = useState(false);
    const [error, setError] = useState(false);

    async function handleLogin(event) {
        event.preventDefault()
        const userEmail = document.getElementById('userEmail').value
        const userPassword = document.getElementById('userPassword').value

        const loginData = {
            "email": userEmail,
            "password": userPassword
        }

        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        }

        await fetch(`http://localhost:3000/login`, options)
            .then(response => {response.json()
                if (response.status == 200) {        
                    localStorage.setItem('user', JSON.stringify(userEmail))
                    setLogin(true)
                    return <Navigate to="/business" />
                    
                } else {
                    console.log('Não autorizado')
                }
            })
            .catch(erro => {
                setError(true)
                console.log("ERRO " + erro)
            })
    }

    if (isLogged && !error) {
		return <Navigate to="/business" />
	}

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <div className="sign-in-htm">
                <div className="group">
                    <label htmlFor="email" className="label">E-mail</label>
                    <input id="userEmail" name='userEmail' type="text" className="input" />
                </div>
                <div className="group">
                    <label htmlFor="userPassword" className="label">Senha</label>
                    <input id="userPassword" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check"><span className="icon"></span> Mantenha-me logado</label>
                </div>
                <div className="group" id="login">
                    <a>
                        <input type="submit" className="button" value="Entrar" />
                    </a>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a href="#forgot">Esqueceu a senha?</a>
                </div>
            </div>
            <SignUpForm />
        </form>
    )
}