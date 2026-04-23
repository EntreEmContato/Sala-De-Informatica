// Efeito de entrada suave
window.addEventListener("load", () => {
  const container = document.getElementById("container")

  container.style.opacity = "0"
  container.style.transform = "translateY(20px)"

  setTimeout(() => {
    container.style.transition = "all 0.6s ease"
    container.style.opacity = "1"
    container.style.transform = "translateY(0)"
  }, 100)
})

// Remove animação do botão depois que o usuário interagir
const botao = document.querySelector("ul li a")

botao.addEventListener("mouseover", () => {
  botao.style.animation = "none"
})

// Pequeno efeito de clique
botao.addEventListener("click", () => {
  botao.style.transform = "scale(0.97)"

  setTimeout(() => {
    botao.style.transform = "scale(1)"
  }, 150)
})
