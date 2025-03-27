// "Hello" => "olleH"
// Solution 1
function reverse(str) {
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
console.log(reverse("Hello"));
// Solution 2
function reverse2(str) {
  return str.split("").reverse().join("");
}
console.log(reverse2("Apple"));
