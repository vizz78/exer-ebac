
const clientes = document.getElementById("clientes");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

const API_URL = "https://crudcrud.com/api/349cf82bfecb4c2f9577960cad416891/usuarios";

Window.addEventListener("DOMContentLoaded", listarClientes);

function addTask() {
    const taskText = nome.value.trim();
    const taskEmail = email.value.trim();

    if (taskText !== "" && taskEmail !== ""){

        const novoCliente = {
            nome: taskText,
            email: taskEmail
        };

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCliente)
        })
        .then(res => res.json())
        .then(clienteCriado => {
            renderCliente(clienteCriado);
            nome.value = "";
            email.value = "";
        });

    }
}
function renderCliente(cliente) {

    const ul = document.createElement("ul");
    ul.id = "clientes";
    ul.classList.add("lista");
    ul.dataset.id = cliente._id;

    ul.innerHTML = `
    <p class="mostrarNome">${cliente.nome}</p>
    <p>${cliente.email}</p>
    <button class="editButton" onClick="editTask(this)" >Editar</button>
    <button class="delete" onClick="excluirTask(this)">Delete</button>
    `
    
    clientes.appendChild(ul);
    
}

function listarClientes(){
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.forEach(renderCliente);
    });
}


function editTask(button) {
    const ul = button.parentElement;
    const id = ul.dataset.id;
    const nomeEl = ul.querySelector(".mostrarNome");
    const emailEl = ul.querySelectorAll("p")[1];

    const novoNome = prompt("Editar nome:", nomeEl.textContent);
    const novoEmail = prompt("Editar email:", emailEl.textContent);

    if (novoNome && novoEmail) {
        const atualizado = {
            nome: novoNome,
            email: novoEmail
        };

        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(atualizado)
        }).then(() => {
            nomeEl.textContent = novoNome;
            emailEl.textContent = novoEmail;
        });
    }
}



function excluirTask(button){
    const ul = button.parentElement;
    const id = ul.dataset.id;

    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => {
        clientes.removeChild(ul);
    });
}