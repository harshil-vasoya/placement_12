//binary to decimal 
function convertintonumber() {
    var num = "100.111"
    var part = num.split(".");
    ans = 0;
    temp = [...part[0]]
    reverse = ""
    for (let i = 0; i < part[0].length; i++) {
        reverse += temp[temp.length - 1 - i];
    }
    for (let i = 0; i < part[0].length; i++) {
        ans += Number(reverse[i]) * (2 ** i);
    }

    for (let i = 0; i < part[1].length; i++) {
        ans += Number(part[1][i]) * (2 ** ((i + 1) * -1));
    }

    console.log(ans)
}
convertintonumber()