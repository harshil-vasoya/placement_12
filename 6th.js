//find difrence of binaaray with out convert into binaray;

let a=18;
let b=10;
let m= a>b? a:b;
let ans=0;

while(m)
{
    let tempa=a&1;
    let tempb=b&1;
    if(tempa!=tempb)
    ans+=1;

    m=m>>1;
    a=a>>1;
    b=b>>1;
}
console.log(ans)