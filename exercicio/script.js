function validarFormulario() {
    // Obtém os valores dos campos A e B
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;



    // Realiza a validação
    if (campoB > campoA) {
        exibirMensagem(true, "Formulário válido!");
    } else {
        exibirMensagem(false, "Formulário inválido. Certifique-se de que o número B é maior que o número A.");
    }
}

function exibirMensagem(valido, mensagem) {
    let mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = mensagem;

    if (valido) {
        mensagemElement.style.color = 'green';
    } else {
        mensagemElement.style.color = 'red';
    }
}
