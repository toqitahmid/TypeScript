type Address = {
    country: string;
    distric: string;
    phone: string;
    age: number;
    isActive: boolean;
    action: () => void;
}
type User = {
    id: number;
    name: string;
    address: Address;
}

const person: User = {
    id: 110,
    name: 'Araf',
    address:{
        country: "Bangladesh",
        distric: "Dinajpur",
        phone: "01340996627",
        age: 22,
        isActive: true,
        action: () => console.log(`Hello ${person.name}`)
    }
}

console.log(person);


//note:
// 1. Type aliases in TypeScript allow you to create a custom name for a type.
// 2. Type aliases can be used to create more descriptive names for complex types.