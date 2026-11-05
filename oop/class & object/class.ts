class User {
    name: string;
    role: string;

    constructor(name: string, role: string){
        this.name = name;
        this.role = role
    }
}

const Araf = new User("Araf", "User");
const Toqi = new User("Toqi", "Admin");
console.log(Araf, Toqi);