//typeof
let x:string = "";
console.log(typeof x);

//type guard
const extractValue = (value: number | string) => {
    if(value && typeof value === "string"){

        console.log(value.toUpperCase());
        return;
    }
    console.log(value);
}
extractValue("araf");


//Truthiness
type User = {
    name: string;
    address?: {
        street: string
    };
} | null;

const user: User = {
    name: "Araf",
    address:{
        street: "101/A Savar",
    }
};

const showUserInfo = (user: User) => {
    if(user && user.address){
        console.log(user.address.street)
        return;
    }
    console.log("There is no user")
}
showUserInfo(user);