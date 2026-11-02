let userName: string = "Araf";

console.log(`
    Hello dear ${userName.toUpperCase()}
    welcome hereee
    `);


const retrunUserInfo = (name:string, age:number, location:string):object => {
    return{
        userName: name,
        userAge: age,
        userLocatin: location
    }
}

console.log(retrunUserInfo("Araf", 1, "Dhaka, Bangladesh"));


//note as interview perspective:
// 1. string type is used to represent textual data in TypeScript.
// 2. TypeScript provides various string manipulation methods, such as toUpperCase(), toLowerCase(), and trim(), which can be used to modify and format string values.
// 3. Template literals (enclosed in backticks) allow for multi-line strings and embedding expressions using ${}.
