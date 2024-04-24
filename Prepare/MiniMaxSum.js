function miniMaxSum(arr){
  let order = arr.sort()

  let min = order.slice(0,4).reduce((acc,curr) => acc + curr, 0)
  let max = order.slice(1).reduce((acc,curr) => acc + curr, 0)

  console.log(min,max)
}
