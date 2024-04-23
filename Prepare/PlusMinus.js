function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
    
  const n = arr.length;

  arr.forEach(num => {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  });
    
  const positiveRatio = positive / n;
  const negativeRatio = negative / n;
  const zeroRatio = zero / n;
    
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}
