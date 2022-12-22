function findDigits(n){
  let newNum = (n + '').split('')
  let divisors = []

  for(let i = 0; i < newNum.length; i++){
    let num = newNum[i] * 1
    if(n % num == 0){
      divisors.push(n)
    }
  }
  return divisors.length
}
