function kangaroo(x1,v1,x2,v2){
  let result = 'No'

  if(v1 <= v2) return result

  while(x1 <= x2){
    x1 += v1 
    x2 += v2

    if(x1 === x2){
      result = 'YES'
      break
    }
  }
  return result 
}
