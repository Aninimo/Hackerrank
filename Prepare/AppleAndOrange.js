function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApple = 0;
  let countOrange = 0;

  for (let i = 0; i < apples.length; i++) {
    let position = a + apples[i];
    if (position >= s && position <= t) {
      countApple++;
     }
   }

   for (let i = 0; i < oranges.length; i++) {
      let position = b + oranges[i];
      if (position >= s && position <= t) {
        countOrange++;
      }
    }
  
  console.log(countApple) 
  console.log(countOrange)
}
