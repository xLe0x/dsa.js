// "Hello" => "olleH"

// Solution 1
function reverse(str: string): string {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
}

console.log(reverse("Hello"));

// Solution 2

function reverse2(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverse2("Apple"));
