function compareTriplets(a, b) {
 let Apoints = 0
 let Bpoints = 0

 for(let i = 0; i < 3; i++){
    if(a[i] > b[i]){
       Apoints += 1
    }
    else if(a[i] < b[i]){
       Bpoints += 1
    }
 }

 let score = [Apoints, Bpoints]

 return score
}

console.log(compareTriplets([1,2,3], [3,2,1]))
