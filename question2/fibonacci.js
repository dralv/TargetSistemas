let sequencia = [0, 1]

function verificaFibo(numero) {
  for (i = 0; i < numero; i++) {
    let novoNumero = sequencia[i] + sequencia[i + 1]
    sequencia.push(novoNumero)
  }

  if (sequencia.includes(numero)) {
    console.log(`O número ${numero} faz parte da sequência de Fibonacci`)
  } else {
    console.log(`O número ${numero} não faz parte da sequência de Fibonacci`)
  }

  console.log(sequencia)
}

verificaFibo(21)
