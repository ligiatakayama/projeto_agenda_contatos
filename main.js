const form = document.getElementById(`form-atividade`);
const telefones = [];

let linhas =``;

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    adicionalinha();
    adicionaTabela();
});

function adicionalinha() {
    const inputNome = document.getElementById(`nome-contato`);
    const inputTelefone = document.getElementById(`num-contato`);

        let linha = `<tr>`;
        linha +=`<td>${inputNome.value}</td>`;
        linha +=`<td>${inputTelefone.value}</td>`;
        linha +=`</tr>`;
    
        linhas += linha;
    
        const corpoTabela = document.querySelector(`tbody`);
        corpoTabela.innerHTML = linhas;
    
        inputNome.value =``;
        inputTelefone.value =``;
}