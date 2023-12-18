function pickingNumbers(a){
  let max_length = 0
  let newValues = a.sort()

  for(let i = 0; i < newValues.length; i++){
    let count = 1
    for(let j = i + 1; j < newValues.length; j++){
      if(Math.abs(newValues[i] - newValues[j]) <= 1){
        count += 1
      }
    }
    max_length = Math.max(max_length,count)
  }
  return max_length
}
