//find the number of giver 1 to n 
function temp() {

    var n = Number(prompt());
    // var n = 3;   
    var ans = "";

    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    console.log(ans[n - 1])
}
temp();