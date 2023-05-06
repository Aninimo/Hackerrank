function gradingStudents(grades){
  let result = []
  
  for(let i = 0; i < grades.length; i++){
    if(grades[i] >= 38){
      let remainder = grades[i] % 5
      if(grades[i] === 3){
        result.push(grades[i]
      }
      else if(grades[i] === 4){
        result.push(grades[i])
      }
      else{
        result.push(grades[i])
      }
    }
    else{
      result.push(grades[i])
    }
  }
  return result
}
