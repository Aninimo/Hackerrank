function sockMerchant(n,ar){
  if(!ar || ar.length !== n ) return 0

  let pairs = 0
  let obj = {}

  for(let num of ar){
    obj[num] = obj[num] % 2 === 0
    pairs += obj[num]
  }
  return pairs
}
