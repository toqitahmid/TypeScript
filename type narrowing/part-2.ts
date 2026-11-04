//some convert of Type Guard
const printAll  = (value: string | string[] | null) => {
    if(value && typeof value === "object"){
        console.log(value)
    }
    else if(value && typeof value === "string"){
        console.log(value)
    }
    else{
        console.log("")
    }
}

printAll(null)