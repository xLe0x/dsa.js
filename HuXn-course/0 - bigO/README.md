# Big O

Big O notation helps us understand how long an
algorithm will take to run or how much memory it
will need as the amount of data it handles grows.

## O(n)

Signifies that the execution time of the algorithm
grows _linearly_ in proportion to the size of the
_input data_ (n).

As the number of items in the input data
increases, the time it takes for the algorithm to
run increases correspondingly.

### Example

Imagine you have a list of groceries. To find a specific item (like milk),
you might need to scan through the entire list. If the list has 5 items,
it'll take a relatively short time. But if the list has 500 items, it'll take
considerably longer. This is the essence of linear time complexity.

```javascript
const groceries = ["bread", "cheese", "milk", "eggs", "butter"];

function findGrocery(groceries, item) {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) return groceries[i];
  }
}
```

this will loop on each item in the array and check if it's the item we're looking for, this is O(n) time complexity. _(n) is the number of items in the array._

## O(1)

O(1) aka _constant_ time, signifies that the
execution time of an algorithm remains _constant_
regardless of the input size.

### Example

Imagine you have a box filled with items, and you know exactly
where each item is located. To get a specific item, you go
directly to its location, taking the same amount of time
irrespective of how many items are in the box.

```javascript
const numbers = [1, 2, 3, 4, 5];

function findNumber(numbers, index) {
  return numbers[index];
}
```

this will return the item at the given index in the array, this is O(1) time complexity.

## O(n^2)

Indicates that the algorithm's execution time
grows quadratically with the size of the input
data (represented by n).

### Example

Imagine you have a box of items and want to compare each item
with every other item to find specific pairs. As the number of
items (n) increases, the number of comparisons (n^2) grows
much faster.

```javascript
function findPairs(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }
}

findPairs([1, 2, 3, 4, 5]);
```

this will loop on each item in the array and compare it with every other item, this is O(n^2) time complexity. _(n) is the number of items in the array._

## O(n^2 + n)

```javascript
function findPairs(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
    }
  }

  for (let q = 0; q < numbers.length; q++) {
    console.log(numbers[q]);
  }
}

// if we combine both, we get O(n^2 + n)
// O(n^2) is the dominant term
// "n" is the non-dominant term
// we drop the constants and get O(n^2)
// this will simplify our time complexity
```

## O(log n)

O(log n) time complexity refers to an algorithm's
runtime that grows logarithmically with the size
of the input (represented by n). In simpler terms,
as the input size increases, the time it takes for
the algorithm to run increases slowly.

    log2 8 = 3 (two to the power of what is 8? 2^3 = 8) 3 is the number of operations

### Example

Imagine you have a list of numbers and you want to find a specific number. You can use binary search, which repeatedly divides the list in half until you find the number. As the list size (n) increases, the number of operations needed (log n) grows much slower.

```javascript
function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) return mid;
    if (numbers[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```
