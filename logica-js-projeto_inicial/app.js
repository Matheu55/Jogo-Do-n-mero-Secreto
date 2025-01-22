alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = prompt("Qual o número máximo possível para o desafio?");
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = parseInt(prompt(`Ok, escolha um número entre 1 e ${numeroMaximo}`));
  // Se o chute for igual ao número secreto
  if (numeroSecreto == chute) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // Incrementa o número de tentativas
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

