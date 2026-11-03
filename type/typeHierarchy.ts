//Top Types
let helloWorld: any = "Hello World";
helloWorld = 123;
helloWorld.length;

const something: unknown = "Hello world";
// something.length


//Core Types
const num: number = 121;
let something2: void;
// something2 = num

let value: void;
let nothing: unknown;
nothing = value;


//Nullish Types
interface User{
    name: string;
}
type loggedInUser= User | null;
let currentUser: loggedInUser = null;
