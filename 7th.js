//add two list 
class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}
class CreateList {
    constructor() {
        this.head = null,
            this.size = null
    }

    addintolist(value) {
        if (this.head == null) {
            var temp = new Node(value);
            this.head = temp
        }
        else {
            var temp = new Node(value);
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = temp;
            this.size++;
        }
    }
    print() {
        var current = this.head;
        var list = ""
        while (current) {
            list += current.value;
            var check = current.next ? "->" : "";
            list += check
            current = current.next;
        }
        console.log(list)
    }
}
var list = new CreateList();


list.addintolist(7);
list.addintolist(8);
list.addintolist(9);
list.print();

var list2 = new CreateList();

list2.addintolist(1);
list2.addintolist(2);
list2.addintolist(3);
list2.print();

function reverselistandadd() {
    var current1 = list.head;
    var current2 = list2.head;
    var prervious1 = null;


    while (current1) {
        var temp = current1.next;
        current1.next = prervious1;
        prervious1 = current1;
        current1 = temp;
    }
    list.head = prervious1;
    list.print();

    var prervious2 = null;


    while (current2) {
        var temp = current2.next;
        current2.next = prervious2;
        prervious2 = current2;
        current2 = temp;
    }
    list2.head = prervious2;
    list2.print();
}

reverselistandadd()

function addlist() {
    var current1 = list.head;
    var current2 = list2.head;
    var carray = 0;
    var ans = new CreateList();
    while (current1 && current2) {
        let sum = current1.value + current2.value + carray;


        if (sum > 9) {
            carray = parseInt(sum / 10);

            sum = sum % 10;
        }

        ans.addintolist(sum);
        current1 = current1.next;
        current2 = current2.next;
    }
    // var reverseans = ans.head;
    // var temprev = null;

    // while (reverseans) {
    //     var temp = reverseans.next;
    //     reverseans.next = temprev;
    //     temprev = reverseans;
    //     reverseans = temp;
    // }
    // ans.head = temprev;
    ans.print();

}

addlist()