// two string needle and haystack , return the index of the first occurrence 

var a = "darshan";
    var b = "dar";
function temp() {
    

    var a = "sadbujdksfha";
    var b = "sad";

    console.log(a.indexOf(b));
    // var j = 0;
    // var flagindex = -1;

    // for (let i = 0; i < a.length; i++) {
    //     var tempindex = i;
    //     while (j < b.length && tempindex < a.length) {
    //         if (a[i] == b[tempindex - i]) {
    //             j++;
    //         }
    //         tempindex++
    //     }
    //     if (j == b.length) {
    //         flagindex = i - b.length + 1;
    //         console.log(i)
    //         break;
    //     }

    // }
    // if (flagindex != -1) {
    //     console.log("accurend at ", flagindex)
    // }
    // else {
    //     console.log("not accurend", flagindex);
    // }
}



var temp = function (haystack, needle) {
    const slen = haystack.length;
    const plen = needle.length;
    if (slen == plen) {
        return haystack == needle ? 0 : -1;
    }
    for (let i = 0; i <= slen - plen; i++) {
        let j;
        for (j = 0; j < plen; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
        }
        if (j == plen) return i;
    }
    return -1;
};