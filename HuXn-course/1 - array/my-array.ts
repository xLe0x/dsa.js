class MyArray {
  public length: number;

  private data: {
    [key: number]: any;
  };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item: any) {
    this.data[this.length] = item;
    this.length++;
  }

  get(index: number) {
    return this.data[index];
  }

  pop() {
    if (this.length === 0) return;

    // this.length--;
    // const lastItem = this.data[this.length];
    // delete this.data[this.length];

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) return;

    const firstElement = this.data[0];
    // [1, 2, 3]
    for (let i = 0; i < this.length; i++) {
      // [2, 3, undefined]
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return firstElement;
  }

  delete(index: number) {
    const item = this.data[index]; // item =>

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[index];
    this.length--;

    return item;
  }
}

const myNewArray = new MyArray();
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
