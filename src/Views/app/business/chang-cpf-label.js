function changeCPFlabel() {
    let registerType = document.getElementById('form-registerType').value

    if (registerType == "Pessoa Jurídica") {
        let registerTypeElement = document.getElementById('form-cpf-label')
        registerTypeElement.innerText = 'CNPJ'
        document.getElementById('form-cpf').placeholder = '00.000.000/0000-00'
    }
    
    else {
        let registerTypeElement = document.getElementById('form-cpf-label')
        registerTypeElement.innerText = 'CPF'
        document.getElementById('form-cpf').placeholder = '000.000.000-00'
    }
}
