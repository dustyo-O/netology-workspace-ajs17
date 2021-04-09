const getCoin = () => {
  return Math.random() > 0.5 ? 'Орел' : 'Решка'
}

const coin = getCoin()

console.log(coin)
