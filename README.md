## Solutions 


# 1 # 
#### Given two string needle and haystack , return the index of the frist occurrence of the needle in haystack, or 1 if the needle is nor the part of haystack ####
#### JavaScript

```js
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
```

```js
var temp=function(haystack, needle){
  return haystack.indexOf(needle);
}
```

# 2 #

#### Design a stack that supports push , pop , top and retrieving the minimum element in constant time.

```js
class Minstack {
    constructor() {
        this.Stack = [];
    }
}

class ImplemetStack {
    constructor() {
        this.stack = null;
        this.getMin = null;
        this.Stacksize = -1;
        this.output = [];
    }

    push(value) {
        if (this.stack == null) {
            var tempstack = new Minstack();
            this.output.push([]);

            tempstack.Stack.push(value);
            this.stack = tempstack.Stack;
            this.Stacksize++;
            this.output.push([-2]);

        }
        else {
            var tempstack = new Minstack();
            tempstack.Stack = this.stack;
            tempstack.Stack.push(value);
            this.stack = tempstack.Stack;
            this.Stacksize++;
            this.output.push([value]);


        }

    }
    pop() {
        if (this.Stacksize < 0) {
            console.log("stack is empty");
        }
        else {

            // this.output.push(this.stack[this.Stacksize--]);
            this.output.push([]);
            return this.stack[this.Stacksize--];

        }

    }
    top() {
        if (this.Stacksize < 0) {
            console.log("stack is empty");

        }
        else {
            this.output.push([]);
            return this.stack[this.Stacksize];

        }
    }

    getMinS() {
        if (this.Stacksize < 0) {
            console.log("stack is empty");
        }
        else {
            var tempstack = [];

            for (let i = 0; i <= this.Stacksize; i++) {
                tempstack[i] = this.stack[i];
            }
            tempstack.sort((a, b) => a - b);
            this.output.push([]);
            return tempstack[0];
        }
    }

    getoutput() {
        console.log(this.output);
    }

}

var obj = new ImplemetStack();
// obj.push(10);
obj.push(-2);
obj.push(0);
obj.push(-3);


obj.getMinS();
obj.pop();
obj.top();
obj.getMinS();

obj.getoutput();

```

# 3 #
#### Given an integer n , return the number of trailing zeroes in n!.

```js
function solution(n) {
    var ans = 0;

    for (let i = 5; i <= n; i=i*5) {
        ans=ans+parseInt(n/i);
    }
    console.log(ans);
    return ans;
}
```
# 4 #
#### given an integer n , return the nth digit o the infinite integer sequence [1,2,3...]

```js
function solution(n) {
      
    var ans = "";

    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    console.log(ans[n - 1]);
}
```

# 5 #
####  Suppose an array of length n sorted in ascending order is rotated between 1 and n times , for example the array nums =[0,1,2,3,4,5] might become:[4,5,0,1,2,3]

