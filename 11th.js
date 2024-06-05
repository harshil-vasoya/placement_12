//find quoient with out multiplication and dividend;s
function temp() {
    let dividend = 10;
    let divisor = 3;
    let tempdividend = dividend < 0 ? dividend * -1 : dividend;
    let tempdivisor = divisor < 0 ? divisor * -1 : divisor;
    let quoient = 0;
    let remainder = tempdividend;


    while (remainder >= tempdivisor) {
        remainder = remainder - tempdivisor;
        quoient++;
    }


    if (dividend < 0 && divisor > 0) {
        console.log(-1 * quoient);
    }
    else if (dividend > 0 && divisor < 0) {
        console.log(-1 * quoient)
    }
    else {
        console.log(quoient)
    }

}
temp()