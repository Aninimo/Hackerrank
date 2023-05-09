function migratoryBirds(arr) {
    let count = {}
    let max = 0
    let maxKey
     
    for(let i = 0; i < arr.length; i++){
      if(count[arr[i]]){
        count[arr[i]] += 1
      }
      else{
        count[arr[i]] = 1
      }
    }
    for(let key in count){
      if(count[key] > max){
        max = count[key]
        maxKey = key
      }
    }
    return parseInt(maxKey)
}
