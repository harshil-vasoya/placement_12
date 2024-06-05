//find the number of giver 1 to n 
function temp(n) {
      
    var ans = "";

    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    console.log(ans[n - 1])
}
temp();