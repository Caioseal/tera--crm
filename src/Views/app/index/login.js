const loginButton = document.getElementById('login')

loginButton.addEventListener('click', async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value

    const loginData = {
        "email": email,
        "password": password
    }

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    }

    await fetch(`http://localhost:3000/login`, options)
        .then(response => {
            response.json()
            if (response.status == 200) {
                console.log("LOGADO")
                window.location.replace = "../"
            } else {
                console.log('Não autorizado')
            }
        })
        .catch(erro => {
            console.log("ERRO " + erro)
        })
})
