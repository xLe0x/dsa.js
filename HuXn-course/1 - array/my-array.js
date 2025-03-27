var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
    };
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.pop = function () {
        if (this.length === 0)
            return;
        // this.length--;
        // const lastItem = this.data[this.length];
        // delete this.data[this.length];
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };
    MyArray.prototype.shift = function () {
        if (this.length === 0)
            return;
        var firstElement = this.data[0];
        // [1, 2, 3]
        for (var i = 0; i < this.length; i++) {
            // [2, 3, undefined]
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstElement;
    };
    MyArray.prototype.delete = function (index) {
        var item = this.data[index]; // item =>
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[index];
        this.length--;
        return item;
    };
    return MyArray;
}());
var myNewArray = new MyArray();
console.log(myNewArray);
// Pushing
myNewArray.push(1);
myNewArray.push(2);
myNewArray.push(3);
console.log(myNewArray);
// // Getting
// console.log(myNewArray.get(1));
// // Popping
// myNewArray.pop();
// console.log(myNewArray);
// // Shifting
// myNewArray.shift();
// console.log(myNewArray);
// Deleting
myNewArray.delete(1);
console.log(myNewArray);
