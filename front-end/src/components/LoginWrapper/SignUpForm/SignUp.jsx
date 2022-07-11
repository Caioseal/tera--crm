import { notification } from 'antd';

import './SignUp.css';

export function SignUpForm() {

    async function handleSignUp(event) {
        event.preventDefault()
        const fullName = document.getElementById('userName').value
        const email = document.getElementById('userCreateEmail').value
        const password = document.getElementById('userCreatePassword').value

        console.log(fullName, email, password)

        const signUpData = {
            "full_name": fullName,
            "email": email,
            "password": password
        }

        console.log(signUpData)

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signUpData)
        }

        const openNotificationWithIcon = (type) => {
            notification[type]({
              message: 'Usuário criado com sucesso'
            });
          };

        await fetch(`http://localhost:5000/users/`, options)
        .then(response => {
            response.json()
            if (response.status === 201) {
                console.log('Usuário criado com sucesso')
                openNotificationWithIcon('success')
                document.getElementById('userName').value = ''
                document.getElementById('userCreateEmail').value = ''
                document.getElementById('userCreatePassword').value = ''
            } else {
                console.log('Erro ao criar usuário')
            }
        })
        .catch(erro => {
            console.log("ERRO " + erro)
        })
    }

    return (
        <div className="sign-up-htm">
            <div className="group">
                <label htmlFor="name" className="label">Nome completo</label>
                <input id="userName" name='userName' type="text" className="input" />
            </div>
            <div className="group">
                <label htmlFor="userEmail" className="label">E-mail</label>
                <input id="userCreateEmail" type="text" className="input" />
            </div>
            <div className="group">
                <label htmlFor="password" className="label">Senha</label>
                <input id="userCreatePassword" type="password" className="input" data-type="password" />
            </div>
            <div className="group" >
                <p>
                    <input type="submit" className="button" value="Registrar" onClick={handleSignUp} />
                </p>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <label htmlFor="tab-1" />
                <p>Já é registrado?</p>
            </div>
        </div>
    )
}