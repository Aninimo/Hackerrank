function angryProfessor(k, a) {
  const onTimeCount = a filter(time => time <= 0).length
  if(onTimeCount < k){
    return 'YES'
  }
  else{
    return 'NO'
  }
}
