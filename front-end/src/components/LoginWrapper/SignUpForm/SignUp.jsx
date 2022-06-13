import './SignUp.css';

export function SignUpForm() {
    return (
        <div className="sign-up-htm">
            <div className="group">
                <label htmlFor="userEmail" className="label">E-mail</label>
                <input id="userCreateEmail" type="text" className="input" />
            </div>
            <div className="group">
                <label htmlFor="password" className="label">Senha</label>
                <input id="userCreatePassword" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
                <label htmlFor="passwordConfirmed" className="label">Confirme a senha</label>
                <input id="userPasswordConfirmed" type="password" className="input" data-type="password" />
            </div>
            <div className="group" >
                <p>
                    <input type="submit" className="button" value="Registrar" />
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