export function SignUpForm() {
    return (
        <div className="sign-up-htm">
            <div className="group">
                <label for="user" className="label">E-mail</label>
                <input id="user" type="text" className="input" />
            </div>
            <div className="group">
                <label for="pass" className="label">Senha</label>
                <input id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
                <label for="pass" className="label">Confirme a senha</label>
                <input id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group" >
                <a href="front-end/html/business.html">
                    <input type="submit" className="button" value="Registrar" />
                </a>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <label for="tab-1" /><a>Já é registrado?</a>
            </div>
        </div>
    )
}