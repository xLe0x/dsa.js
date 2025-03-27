// 1234 => 4321

function reverseInt(num: number) {
  if (!Number.isInteger(num)) return;

  let res = "";
  let str = num.toString();

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return Number(res);
}

console.log(reverseInt(1234));
