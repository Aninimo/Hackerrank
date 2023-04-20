function breakingRecords(scores){
  let highestScore = scores[0]
  let lowestScore = scores[0]
  let min = 0
  let max = 0
  
  for(let i = 0;i < scores.length; i++ ){
    if(scores[i] > highestScore){
      highestScore = scores[i]
      max += 1;
    }
    else if(scores[i] < lowestScore){
      lowestScore = scores[i]
      min += 1
    }
  }
  return [max,min]
}
