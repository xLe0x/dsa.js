// hello world => Hello World;

function capitalize(str: string): string {
  //   str = str.toLowerCase();

  //   let words = str.split(" ");
  //   words = words.map((word) => word[0].toUpperCase() + word.slice(1));

  //   return words.join(" ");
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("hello world"));
