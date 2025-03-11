const primeiroNumero = document.querySelector("#firstNumber");
const segundoNumero = document.querySelector("#secondNumber");
const operador = document.querySelector("select");
let resultado = document.querySelector("p");

primeiroNumero.addEventListener("input", (e) => {
  try {
    if (isNaN(e.target.value)) {
      throw new Error("O valor informado não é um número");
    }
  } catch (error) {
    alert(error);
    e.target.value = "";
  }

  if (primeiroNumero.value && segundoNumero.value) {
    calcular();
  }
});

segundoNumero.addEventListener("input", (e) => {
  try {
    if (isNaN(e.target.value)) {
      throw new Error("O valor informado não é um número");
    }
  } catch (error) {
    alert(error);
    e.target.value = "";
  }

  if (segundoNumero.value) {
    calcular();
  }
});

operador.addEventListener("change", () => {
  if (primeiroNumero.value && segundoNumero.value) {
    calcular();
  }
});

function calcular() {
  let valor1 = primeiroNumero.value;
  let valor2 = segundoNumero.value;
  let operacao = operador.value;
  let resultadoOperacao;

  switch (operacao) {
    case "soma":
      resultadoOperacao = parseFloat(valor1) + parseFloat(valor2);
      resultado.textContent = `Resultado: ${resultadoOperacao}`;

      break;
    case "subtracao":
      resultadoOperacao = parseFloat(valor1) - parseFloat(valor2);
      resultado.textContent = `Resultado: ${resultadoOperacao}`;

      break;
    case "multiplicacao":
      resultadoOperacao = parseFloat(valor1) * parseFloat(valor2);
      resultado.textContent = `Resultado: ${resultadoOperacao}`;

      break;
    case "divisao":
      resultadoOperacao = parseFloat(valor1) / parseFloat(valor2);
      resultado.textContent = `Resultado: ${resultadoOperacao}`;

      break;
  }
}
