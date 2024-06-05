
// find the minimum element from the given array
function findminimum() {
    let a = [3, 4, 5, 1, 2];
    let b = [...a]

    a.sort((a, b) => a - b);
    for (let i = 0; i < a.length; i++) {
        if (a[0] == b[i]) {
            console.log("original array was rotated " + i + " times");
        }
    }
    console.log(a[0]);

}



function check() {
    let a = [3, 4, 5, -4, 2];
    // let a = [4, 5, 6, 7, 0, 1, 2]

    let mid = parseInt(a.length / 2)
    let right = 0;
    let left = a.length - 1;;

    while (true) {
        if (a[mid] > a[right] && a[mid] < a[left]) {
            right = mid
            mid = parseInt((mid + left) / 2);
        }
        else if (a[mid] < a[right] && a[mid] > a[left]) {
            left = mid
            mid = parseInt((mid + right) / 2);
        }
        else if (a[mid] > a[right] && a[mid] > a[left]) {
            if (a[right] > a[left]) {
                right = mid

                mid = parseInt((mid + left) / 2);


            } else {
                left = mid
                mid = parseInt((mid + right) / 2);
            }
        }
        else {
            break;
        }
    }

    console.log(a[mid])
}
check()
// findminimum()