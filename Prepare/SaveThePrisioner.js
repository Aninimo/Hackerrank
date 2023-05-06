function saveThePrisoner(n,m,s){
  let leftOver = m % n

  if(leftOver == 0 && s == 1){
    return n
  }
  
  let prisioner = (s + leftOver - 1) % n
  if(prisioner == 0){
    return n
  }
  return prisioner
}
