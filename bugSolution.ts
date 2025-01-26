function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result1 = addSafe(5, 10); // Correct usage
console.log(result1); // Outputs 15

try {
  let result2 = addSafe(5, '10'); //This will throw an error
  console.log(result2);
} catch (error) {
  console.error(error);
}

let result3 = add(5, parseInt('10', 10)); //Explicit type conversion
console.log(result3); //Outputs 15