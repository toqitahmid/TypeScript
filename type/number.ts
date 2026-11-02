let age: number = 20;

console.log(`
    How old are you?
    Maybe ${age}!
`);




function Display (name: string, age: number, location: string): object{
    return{
        userName: name,
        userAge: age,
        userLocation: location
    }
};

console.log(Display("Araf", 22, "Dhaka, Bangladesh"))


//note as interview point:
//1. number type is used to represent both integer and floating point numbers.
//2. TypeScript uses the same number type for all numeric values, regardless of whether they are integers or floating-point numbers.