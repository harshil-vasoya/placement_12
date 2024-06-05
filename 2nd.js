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
            return tempstack[0]
        }
    }

    getoutput() {
        console.log(this.output)
    }

}

var obj = new ImplemetStack();
// obj.push(10)
obj.push(-2)
obj.push(0)
obj.push(-3)


obj.getMinS()
obj.pop()
obj.top()
obj.getMinS()

obj.getoutput()




