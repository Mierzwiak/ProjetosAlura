const lupaButton = document.querySelector("#lupaButton");
{ /* Criação do elemento lupaButtonClicado */
  var lupaButtonClicado = document.createElement("input"); 
  lupaButtonClicado.type = "text"; 
  lupaButtonClicado.id = "lupaButtonClicado"; 
  lupaButtonClicado.className = "botoesMenuEsquerda";
  lupaButtonClicado.placeholder = "pesquisar";
  lupaButtonClicado.style.border = "none";
}

document.addEventListener("click", (event) => {

  if (event.target.id == "lupaButton") {
    lupaButton.insertAdjacentElement("afterend", lupaButtonClicado);
    lupaButton.classList.add("botaoAtivo");
  } else if (document.querySelector("#lupaButtonClicado") && event.target.id != "lupaButtonClicado"){
    lupaButtonClicado.parentNode.removeChild(lupaButtonClicado);
    lupaButton.classList.remove("botaoAtivo");
  }

})