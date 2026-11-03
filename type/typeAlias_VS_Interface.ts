interface Animal {
    specise: string;
}

interface Cat extends Animal {
    weight: number;
    hight: number;
    canJump: boolean;

}

const cat: Cat = {
    specise: "Cat",
    weight: 1,
    hight:100,
    canJump: true,
}

console.log(cat);












type Vheical = {
    group: string;
}

type Bike = Vheical & {
    engien: string;
    speed: number;
}

const bike: Bike = {
    group: "Bike",
    engien: "200cc",
    speed: 180,
}


console.log(bike);