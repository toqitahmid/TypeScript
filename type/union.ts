type Identify = number | string;
let personInfo: Identify;



const showInfo = (info: number | string): number|string => {
    if (typeof info === 'string') {
        return `user pass his name ${info}`;
    }
    else {
        return `user pass his age ${info}`;
    }
}
personInfo = 'Araf';
console.log(showInfo(personInfo));
personInfo = 30;
console.log(showInfo(personInfo));


//Literal type
type Name = "Araf";
const name: Name = "Araf";
console.log(name)


//Basic Union
type Value = string | number | boolean;
let value: Value = true;


//Literal Union
type MyName = "Araf" | "Toqi";
let userName: MyName = "Araf";
console.log(userName);


//Object Union
type Admin = {
    id: number;
    role: "admin";
    action: string[];

}
type Member = {
    id: number;
    role: "member";
    plans: string[];

}

const user: Admin | Member = {
    id: 121,
    role: "admin",
    action: ['123']
}
console.log(user);