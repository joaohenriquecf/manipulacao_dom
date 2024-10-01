alert("Olá, seja muito bem vindo");
console.log("Mensagem no console.");

console.log("Largura da janela: " + window.innerWidth);
console.log("Altura da janela: " + window.innerHeight);

localStorage.setItem("meuValor", "Olá, Local Storage!");
console.log("Valor armazenado: " + localStorage.getItem("meuValor"));

const meuDiv = document.createElement("div");
meuDiv.id = "meuDiv";
meuDiv.innerText = "Este é o meu div!";
document.body.appendChild(meuDiv);

meuDiv.style.color = "blue";
meuDiv.style.fontSize = "20px";

const paragrafo = document.querySelector("p");
paragrafo.innerText = "Texto modificado!";
paragrafo.style.backgroundColor = "lightblue";

const botao = document.createElement("button");
botao.innerText = "Clique para alterar o div";
document.body.appendChild(botao);

botao.addEventListener("click", function() {
    meuDiv.innerText = "Conteúdo alterado!";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Tecla Enter pressionada!");
    }
});

const lista = document.createElement("ul");
document.body.appendChild(lista);

const adicionarItem = (texto) => {
    const item = document.createElement("li");
    item.innerText = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.addEventListener("click", function() {
        lista.removeChild(item);
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);
};

adicionarItem("Item 1");
adicionarItem("Item 2");