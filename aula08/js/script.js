let divListaTarefas = document.getElementById("listaTarefas");
let btnAdicionar = document.getElementById("btnAdicionar");

criarTarefa = () => {
    let nome = window.prompt("Nome da tarefa");
    let desc = window.prompt("Descrição da tarefa");
    let data = window.prompt("Data da tarefa");

    let divTarefa = document.createElement("div");
    divTarefa.classList.add("tarefa");

    let h2NomeTarefa = document.createElement("h2");
    let nomeTarefa = document.createTextNode(nome);
    h2NomeTarefa.appendChild(nomeTarefa);

    let pDescTarefa = document.createElement("p");
    let descTarefa = document.createTextNode(desc);
    pDescTarefa.appendChild(descTarefa);
    
    let pDataTarefa = document.createElement("p");
    let dataTarefa = document.createTextNode(data);
    pDataTarefa.appendChild(dataTarefa);

    divTarefa.appendChild(h2NomeTarefa);
    divTarefa.appendChild(pDescTarefa);
    divTarefa.appendChild(pDataTarefa);

    divListaTarefas.appendChild(divTarefa);
    //let tarefaJSON = "{nome: " + nome + ", desc: " + desc + ", data: " + data + "}"


}

btnAdicionar.addEventListener("click", criarTarefa);
// criarTarefa()