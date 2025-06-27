// ouvir evento quando sair do campo cep
document.getElementById("cep").addEventListener("blur", (evento)=>{
    const elemento = evento.target;
    const cepInf = elemento.value;

    //validar cep
    
    if (!(cepInf.length === 8)) {

            //limpa_formulario();
            alert("CEP não encontrado.");

    }else
        
    //fazer busca viaCep
    fetch(`https://viacep.com.br/ws/${cepInf}/json/`)
    .then(response => response.json())
    .then(data => {
        
        //processamento dos datos
        if(!data.erro){

            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.estado;
            document.getElementById('uf').value = data.uf;

        }else{
            alert("Cep nao encontrado.")
        }

    })
    .catch(error => console.error("erro ao buscar o cep", error));
})

// function limpa_formulario() {
//             //Limpa valores do formulário de cep.
//             document.getElementById('rua').value=("");
//             document.getElementById('numero').value=("");
//             document.getElementById('bairro').value=("");
//             document.getElementById('cidade').value=("");
//             document.getElementById('uf').value=("");
//             document.getElementById('estado').value=("");
//     }


//storageinfos
const salvar = document.getElementById("salvar");
salvar.addEventListener("click", () =>{
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const estado = document.getElementById("estado").value;


    localStorage.setItem("cidade", cidade);
    localStorage.setItem("uf", uf);
    localStorage.setItem("estado", estado);
    localStorage.setItem("rua", rua);
    localStorage.setItem("bairro", bairro);

    alert("endereço salvo com sucesso");
});

window.addEventListener("load", () => {
    document.getElementById("cidade").value = localStorage.getItem("cidade") || "";
    document.getElementById("uf").value = localStorage.getItem("uf") || "";
    document.getElementById("estado").value = localStorage.getItem("estado") || "";
    document.getElementById("rua").value = localStorage.getItem("rua") || "";
    document.getElementById("bairro").value = localStorage.getItem("bairro") || "";
});




    
