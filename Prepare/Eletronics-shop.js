function getMoneySpent(keyboards,drivers,b){
  let arr = []
  for(let i = 0; i <= keyboards.length; i++){
    for(let j = 0; j <= drivers.length; j++){
      let sum = keyboards[i] + drivers[j]
      if(sum <= b){
        arr.push(sum)
      }
    }
  }
  return (!arr.length ? -1 : Math.max(...arr))
}
