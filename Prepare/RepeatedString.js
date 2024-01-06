function repeatedString(s,n){
  const occurrences = s.split('a').length - 1
  const fullRepetitions = Math.floor(n / s.length)
  const remainingChars = n % s.length

  const countA = occurrences * fullRepetitions + s.slice(0,remaingChars).split('a').length - 1

  return countA
}
