// "aba" => is a palindrome!
// "hello" => is not a palindrome!

// Solution 1
function palindrome(str: string): boolean {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res === str;
}

console.log(palindrome("aba"));

// Solution 2

function palindrome2(str: string): boolean {
  return str.split("").reverse().join("") == str;
}

console.log(palindrome("aba"));
