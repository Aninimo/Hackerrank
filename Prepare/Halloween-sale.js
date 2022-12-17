function howManyGames(p,d,m,s){
  let count = 0

  while(s >= p){
    count += 1
    p = Math.max(p - d,m)
  }
  return count
}
