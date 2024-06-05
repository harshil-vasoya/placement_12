//clean the given string
function removealltheother() {
    var string = "  -000004207";
    var removespace = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            removespace += string[i]
        }
    }
    var remove0 = ""
    if (Number(removespace) > 0) {
        let j = 0;
        while (removespace[j] == 0) {
            if (removespace[j] != 0) {
                break;
            }
            j++;

        }
        remove0 = removespace.substring(j);
    }
    else {
        let j = 1;
        while (removespace[j] == 0) {
            if (removespace[j] != 0) {
                break;
            }
            j++;

        }
        remove0 = "-" + removespace.substring(j);
    }

    console.log(remove0)
}
removealltheother()