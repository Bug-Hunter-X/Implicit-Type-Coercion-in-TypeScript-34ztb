function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(10, 20); // This will now throw error if not proper input
console.log(result); //Outputs 30

let result2 = add(10, "20"); // This will now throw an error
console.log(result2); 