function birthday(s,d,m){
  let count = 0
  
  for(let i = 0; i < s.length; i++){
    let sum = 0
    for(let j = i; j < m + i; j++){
      sum = sum + s[j]
    }
    if(sum === d){
      count++
    }
  }
  return count
}
