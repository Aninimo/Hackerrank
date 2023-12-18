function pickingNumbers(a){
  const countMap = new Map();
  for (const num of a) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let maxLength = 0
  for(const [num,count] of countMap){
    maxLength = Math.max(maxLength,count + (countMap.get(num + 1) || 0))
  }
  
  return maxLength
}
