function birthdayCakeCandles(candles){
  let max = Math.max(...candles)

  let nums = []
  for(let i = 0; i < candles.length; i++){
    if(candles[i] == max){
      nums.push(candles[i])
    }
  }
  return nums.length
}
