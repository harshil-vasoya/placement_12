
//find the able to reach last possition or not using jump from the start
function findmamimumjump() {
    let nums = [2, 3, 1, 1, 4];
    let n = nums.length;
    if (n == 0) return 0;
    let dp = [0];
    for (let i = 1; i < n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        console.log(dp)
    }

    if (dp[dp.length - 1] == nums[nums.length - 1]) {
        console.log("true");
    }
    else {
        console.log("false")
    }
}

findmamimumjump()