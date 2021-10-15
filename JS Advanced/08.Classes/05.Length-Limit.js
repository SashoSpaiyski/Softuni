class Stringer {
    constructor(string, length) {
        this.stringg = string;
        this.lengthh = length;
    }

    increase(length) {
        this.lengthh += length;
        if (this.lengthh < 0) {
            this.lengthh = 0;
        }
    }

    decrease(length) {
        this.lengthh -= length;
        if (this.lengthh < 0) {
            this.lengthh = 0;
        }
    }

    toString(){
        return this.stringg.slice(0,this.lengthh)+'...';        
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());
