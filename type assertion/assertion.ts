//type assertion
type Status = "pending" | "approved" | "rejected";

const checkStatus = (status: Status) => {
    console.log(`
        Your current application status is : ${status}
        `)
};

const status: string = "I love u";
checkStatus(status as Status);



//non-null assertion
interface Config {
    port?: number;
}

const config: Config = {
    port:5000
}

// const configPort: number = config.port as number
const configPort: number = config.port!
console.log(configPort);



//constant assertion
const configuration = {
    port: 8000,
    prefix: "api/v1"
} as const