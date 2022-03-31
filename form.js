document.getElementById('signup').addEventListener("click", addCard)

function addCard() {
    let newElement = document.createElement('div')
    newElement.innerHTML = "<div class='list-item'><div class='list-item-priority low'>Baixa prioridade</div><div class='list-item-name'><h3 class='client-name'>Pacote para Gramado Chris Rock</h3><i class='material-icons'>more_horiz</i></div><h4 class='client-company'>Bradesco S.A.</h4><div class='list-item-name-align'><i class='material-icons tiny-icon'>monetization_on</i>&nbsp;R$ 300,00</div><div class='list-item-name-align'><i class='material-icons tiny-icon'>date_range</i>&nbsp;31/12/2000</div></div"

    document.getElementById('teste').appendChild(newElement)
}