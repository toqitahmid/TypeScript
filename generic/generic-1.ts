
const genericFun = <T>(value:T): void => {
    console.log(value);
}

const name = genericFun<string>("Araf");
const nums = genericFun<number[]>([10,20,30,40,50])