import './LoginForm.css'
import { SignUpForm } from '../SignUpForm/SignUp'

export function LoginForm() {
    return (
        <div className="login-form">
            <div className="sign-in-htm">
                <div className="group">
                    <label for="email" className="label">E-mail</label>
                    <input id="email" type="text" className="input" />
                </div>
                <div className="group">
                    <label for="pass" className="label">Senha</label>
                    <input id="pass" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                    <input id="check" type="checkbox" className="check" checked />
                    <label for="check"><span className="icon"></span> Mantenha-me logado</label>
                </div>
                <div className="group" id="login">
                    <a href="./src/Views/html/business.html">
                        <input type="submit" className="button" value="Entrar" />
                    </a>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a href="#forgot">Esqueceu a senha?</a>
                </div>
            </div>
            <SignUpForm />
        </div>
    )
}