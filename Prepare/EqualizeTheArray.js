function equalizeArray(arr) {
  let count = {};
  let valueWithGreatestOccurrence;
  let biggestCount = 0;

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
    
    if (count[arr[i]] > biggestCount) {
      biggestCount = count[arr[i]];
      valueWithGreatestOccurrence = arr[i];
    }
  }

  let minDeletions = arr.length - biggestCount;

  return minDeletions;
}
