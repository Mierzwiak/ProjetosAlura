var lupaButton = document.querySelector("#lupaButton");
var lupaButtonClicado;

function clicarPesquisar() {
  lupaButtonClicado = document.createElement("input");
  lupaButtonClicado.type = "text";
  lupaButtonClicado.id = "lupaButtonClicado";
  lupaButtonClicado.className = "botoesMenuEsquerda";

  lupaButton.parentNode.replaceChild(lupaButtonClicado, lupaButton);
  console.log("oi");
}


  
  console.log("oi2");{}

document.addEventListener("click", (event) => {
  lupaButton = document.querySelector("#lupaButton");
  console.log(event.target)
  if (event.target !== lupaButton && event.target.id !== "lupaButton" && lupaButtonClicado) {
    Reverter();
  }
});





// // Adicionar ouvinte de evento para detectar cliques fora do input
// document.addEventListener("click", verificarCliqueExterno);


// // Função para reverter a transformação e voltar para o botão
// function reverterTransformacao() {
//   // Selecionar o elemento do input
//   var input = document.getElementById("meuInput");

//   // Criar um novo elemento de botão
//   var botao = document.createElement("button");
//   botao.id = "meuBotao";
//   botao.style.width = "30px";
//   botao.style.height = "30px";

//   // Substituir o input pelo botão
//   input.parentNode.replaceChild(botao, input);

//   // Remover o ouvinte de evento para cliques externos
//   document.removeEventListener("click", verificarCliqueExterno);
// }

// // Função para verificar cliques fora do input
// function verificarCliqueExterno(event) {
//   var input = document.getElementById("meuInput");

//   // Verificar se o clique ocorreu fora do input e do botão
//   if (event.target !== input && event.target.id !== "meuBotao") {
//     reverterTransformacao();
//   }
// }

// // Chamar a função para transformar o botão em input quando for clicado
// function cliqueNoBotao() {
//   transformarEmInput();
// }

