const nameConcate = (firstName: string, secondName?: string): void => {

    if(!secondName){
        console.log(firstName);
        return;
    }
    console.log(`
        ${firstName} ${secondName}
        `)
}

nameConcate("Toqi", "Tahmid")