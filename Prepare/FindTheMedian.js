function findMedian(arr){
  let result = arr.sort((a,b) => a - b)
  let middleIndex = Math.floor(arr.length / 2)
  
  return result[middleIndex]
}
