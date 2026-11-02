let array: number[] = [];
console.log(typeof array);

for (let i = 10; i <= 100; i += 10){
    array.push(i)
}
console.log(array);

let userNames: string[] = ["Araf","Toqi"];
console.log(userNames)

// note:
// 1. Arrays in TypeScript are used to store multiple values in a single variable.
// 2. TypeScript arrays can be initialized with a specific type for each element.
// 3. Arrays in TypeScript have a fixed size and can be accessed using an index.