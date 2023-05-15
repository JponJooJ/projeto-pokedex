const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    if (body.classList.contains("modo-escuro")) {
        body.classList.remove("modo-escuro");
        imagemBotao.setAttribute("src", "src/imagens/sun.png")
    } else {
    body.classList.add("modo-escuro");
    imagemBotao.setAttribute("src", "src/imagens/moon.png");
    }
})