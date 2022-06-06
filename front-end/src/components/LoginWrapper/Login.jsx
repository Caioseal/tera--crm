import './Login.css'
import { LoginForm } from './LoginForm/Login.Form'

export function Login() {
    return (
        <div>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1"
                        className="tab"><a> Entrar</a></label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Registrar</label>
                <LoginForm />
                </div>
            </div>
        </div>
    )
}