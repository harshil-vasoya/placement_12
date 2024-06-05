//find that given string is in on the disct or not
function temp() {
    // let s = "leetcode"
    // let wordDict = ["leet", "code"];

    let s = "applepenapple"
    let wordDict = ["apple", "penl"];

    let check = wordBreak(s, wordDict);
    console.log(check);

}
function wordBreak(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
            console.log(dp)
        }
    }
    return dp[s.length];
}
temp()