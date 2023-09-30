/*Craindo variaveis*/
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*Eventos de Javastript*/
button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;

    /*Condição*/
    if (inputValue === "") {
        alert("Digite algo");
        return;
    }

    /*Incluindo itens HTML */
    lista.innerHTML += templateHTML;
    /* Limpando o campo*/
    nome.value = "";
});