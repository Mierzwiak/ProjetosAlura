function clicarPesquisar(params) {
  
  var lupaButton = document.querySelector("#lupaButton");
  var lupaButtonClicado = document.createElement("input");

  lupaButtonClicado.type = "text";
  lupaButtonClicado.id = "lupaButtonClicado";
  lupaButtonClicado.className = "botoesMenuEsquerda";

  lupaButton.parentNode.replaceChild(lupaButtonClicado, lupaButton);

}