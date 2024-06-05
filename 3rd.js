// given an integer n , return the numberof trailing zeros in n!;

function solution(n) {
    var ans = 0;

    for (let i = 5; i <= n; i=i*5) {
        ans=ans+parseInt(n/i);
    }
    console.log(ans)
}
solution()