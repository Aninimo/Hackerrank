function banAppetite(bill,k,b){
  let totalCost = 0

  for (let i = 0; i < bill.length; i++) {
      if (i !== k) {
          totalCost += bill[i];
      }
  }

  const annaContribution = totalCost / 2;
  
  if (annaContribution === b) {
      console.log("Bon Appetit");
  } else {
      console.log(b - annaContribution);
  }
}
