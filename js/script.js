const lupaButton = document.querySelector("#lupaButton");
const lupaButtonClicado = document.createElement("input"); lupaButtonClicado.type = "text"; lupaButtonClicado.id = "lupaButtonClicado"; lupaButtonClicado.className = "botoesMenuEsquerda";

document.addEventListener("click", (event) => {

  if (event.target.id == "lupaButton") {
    lupaButton.parentNode.replaceChild(lupaButtonClicado, lupaButton)
  } else if (document.querySelector("#lupaButtonClicado")){
    lupaButtonClicado.parentNode.replaceChild(lupaButton, lupaButtonClicado)
  }

})