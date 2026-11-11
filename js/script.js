const produtos = document.querySelectorAll(".produto");
const btnAdd = document.querySelector("#btnAdd");
const btnRmv = document.querySelector("#btnRmv");

let indexAtual = 0;

function mostraProduto(index) {
  produtos.forEach((produto, i) => {
    if (i === index) {
      produto.classList.remove("hide");
    } else {
      produto.classList.add("hide");
    }
  });
}
mostraProduto(indexAtual);

btnAdd.addEventListener("click", () => {
  indexAtual++;
  if (indexAtual > 2) indexAtual = 0;
  mostraProduto(indexAtual);
});

btnRmv.addEventListener("click", () => {
  indexAtual--;
  if (indexAtual < 0) indexAtual = 2;
  mostraProduto(indexAtual);
});
