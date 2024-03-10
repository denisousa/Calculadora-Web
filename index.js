function realizarOperacao(operacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert('Não é possível dividir por zero!');
                return;
            }
            break;
        default:
            alert('Operação inválida!');
            return;
    }

    document.getElementById('resultado').textContent = resultado;
}

function limparCampos() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').textContent = '';
}
