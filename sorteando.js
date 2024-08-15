"use strict";

const dado = document.getElementById("dado");
const jogar = document.getElementById("jogar");

jogar.addEventListener("click", function () {
  const sorteio = Math.floor(Math.random() * 6) + 1;
  console.log(sorteio);
  dado.src = `imagens/dice-${sorteio}.png`;
  dado.style.visibility = "visible";
});

resetar.addEventListener("click", function () {
  dado.style.visibility = "hidden";
});
