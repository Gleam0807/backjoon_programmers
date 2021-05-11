const MN = 10000;
const check = Array(MN+1).fill(true);
// fill -> 배열의 start index부터 end index 전까지 value값으로 채워줍니다.

function self(n){
  let s= n;
  while(n){
    s += n % 10;
    n = Math.floor(n/10);
  }
  return s+n;
}

for(let i=1;i<=MN;i++){
  const t  = self(i);
  if(t < MN){
    check[t] = false;
  }
}

for(let i=1;i<MN;i++){
  if(check[i])console.log(i);
}