function getTotalX(a,b){
  function gcd(x,y){
    while(y){
      [x,y] = [y, x % y]
    }
    return x;
  }

  function lcm(x,y){
    return (x * y) / gcd(x,y);
  }

  let lcm_a = a.reduce((acc,val) => lcm(acc,val), 1);
  let gcd_b = b.reduce((acc,val) => gcd(acc,val));

  let count = 0;

  for(let multiple = lcm_a; multiple <= gcd_b; multiple += lcm_a){
    if(gcd_b % multiple === 0){
      count++
    }
  }

  return count;
}
