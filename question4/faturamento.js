const faturamento = [
  { Estado: 'SP', Valor: 67836.43 },
  { Estado: 'RJ', Valor: 36678.66 },
  { Estado: 'MG', Valor: 29229.88 },
  { Estado: 'ES', Valor: 27165.48 },
  { Estado: 'Outros', Valor: 19849.53 }
]

function calculaTotal() {
  let total = 0

  faturamento.forEach((dist)=>{
    total += dist.Valor
  })

 return total
}

function calculaPercent(){
  faturamento.forEach((dist)=>{
    console.log(`O percentual de ${dist.Estado} foi ${Math.round(dist.Valor/calculaTotal()*100)} %`)
  })
}


calculaPercent()