const dados = [
  {
    dia: 1,
    valor: 22174.1664
  },
  {
    dia: 2,
    valor: 24537.6698
  },
  {
    dia: 3,
    valor: 26139.6134
  },
  {
    dia: 4,
    valor: 0.0
  },
  {
    dia: 5,
    valor: 0.0
  },
  {
    dia: 6,
    valor: 26742.6612
  },
  {
    dia: 7,
    valor: 0.0
  },
  {
    dia: 8,
    valor: 42889.2258
  },
  {
    dia: 9,
    valor: 46251.174
  },
  {
    dia: 10,
    valor: 11191.4722
  },
  {
    dia: 11,
    valor: 0.0
  },
  {
    dia: 12,
    valor: 0.0
  },
  {
    dia: 13,
    valor: 3847.4823
  },
  {
    dia: 14,
    valor: 373.7838
  },
  {
    dia: 15,
    valor: 2659.7563
  },
  {
    dia: 16,
    valor: 48924.2448
  },
  {
    dia: 17,
    valor: 18419.2614
  },
  {
    dia: 18,
    valor: 0.0
  },
  {
    dia: 19,
    valor: 0.0
  },
  {
    dia: 20,
    valor: 35240.1826
  },
  {
    dia: 21,
    valor: 43829.1667
  },
  {
    dia: 22,
    valor: 18235.6852
  },
  {
    dia: 23,
    valor: 4355.0662
  },
  {
    dia: 24,
    valor: 13327.1025
  },
  {
    dia: 25,
    valor: 0.0
  },
  {
    dia: 26,
    valor: 0.0
  },
  {
    dia: 27,
    valor: 25681.8318
  },
  {
    dia: 28,
    valor: 1718.1221
  },
  {
    dia: 29,
    valor: 13220.495
  },
  {
    dia: 30,
    valor: 8414.61
  }
]

function maior() {
  let maior = 0
  for (i = 0; i < dados.length; i++) {
    if (dados[i].valor > maior) {
      maior = dados[i].valor
    }
  }
  return maior
}

function menor() {
  let menor = maior()
  for (i = 0; i < dados.length; i++) {
    if (dados[i].valor != 0) {
      if (dados[i].valor < menor) {
        menor = dados[i].valor
      }
    }
  }
  return menor
}

function soma() {
  let soma = 0

  dados.forEach(dist => {
    soma = soma + dist.valor
  })

  return soma
}

function lenDifZero() {
  let fatMaiorQueZero = dados.filter(dist => dist.valor > 0)
  return fatMaiorQueZero.length
}

function maioresQueMedia() {
  let media = soma() / lenDifZero()

  let maioresQueMedia = dados.filter(dist => dist.valor > media)

  
  return maioresQueMedia.length
}


console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${maior()}`)
console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${menor()}`)
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${maioresQueMedia()}`)
