function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error will not be caught at compile time
console.log(result); // This will result in string concatenation instead of addition