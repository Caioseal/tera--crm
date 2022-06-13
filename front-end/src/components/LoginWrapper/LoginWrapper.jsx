import { LoginForm } from './LoginForm/Login.Form'

import './LoginWrapper.css'

export function LoginWrapper() {
    return (
        <>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                    <label htmlFor="tab-1" className="tab"><a> Entrar</a></label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Registrar</label>
                <LoginForm />
                </div>
            </div>
        </>
    )
}