let Numbers: [number, number] = [10,20];
Numbers.push(30);
console.log(Numbers);


let ages: readonly[number, number] = [22,20];
console.log(ages);

//note:
// 1. Tuples in TypeScript are arrays with a fixed number of elements and specific types for each position.
// 2. Tuples are useful when you have a known set of elements with specific types and you want to ensure type safety.