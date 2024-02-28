const form = document.getElementById('form-validacao');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
});


function adicionaLinha() {
    const inputPrimeiroNumero = document.getElementById('primeiro-numero');
    const inputSegundoNumero = document.getElementById('segundo-numero');



    let linha = '<tr>';
    linha += `<td>${inputPrimeiroNumero.value}</td>`;
    linha += `<td>${inputSegundoNumero.value}</td>`;
    linha += `<td>${inputPrimeiroNumero.value < inputSegundoNumero.value ? 'Aprovado' : 'Reprovado'}</td>`;
    linha += '</tr>';


    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

    inputPrimeiroNumero = '';
    inputSegundoNumero = '';
}

function atualizaTabela() {
    
}