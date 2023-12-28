function handleRace(k, height) {
 let maxHeight = Math.max(...height)
 let differenceHeight = maxHeight - k
 
 if(differenceHeight > 0){
  return differenceHeight   
 }else{
  return 0
 }
}
