function appendAndDelete(s, t, k){
  let sArr = s.split('')
  let tArr = t.split('')
  let count = 0

  for(let i = 0; i === count && i < s.length; i++){
    if(sArr[i] === tArr[i]){
      count += 1
    }
  }

  let tMinusCount = t.length - count
  let sMinusCount = s.length - count

  let STR = k - (tMinusCount + sMinusCount)

  if(tMinusCount + sMinusCount < k && t.length + s.length > k && STR % 2 !== 0){
    return 'No'
  }

  else if(tMinusCount + sMinusCount <= k){
    return 'Yes'
  }

  else{
    return 'No'
  }
}
