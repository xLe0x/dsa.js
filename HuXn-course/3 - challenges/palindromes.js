// "aba" => is a palindrome!
// "hello" => is not a palindrome!
// Solution 1
function palindrome(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res === str;
}
console.log(palindrome("aba"));
// Solution 2
function palindrome2(str) {
    return str.split("").reverse().join("") == str;
}
console.log(palindrome("aba"));
