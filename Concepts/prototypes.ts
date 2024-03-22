interface Person {
    name: string
}

function createPerson(name: string) {
    this.name = name
}

let lokesh: Person = new createPerson('Lokesh')

console.log(lokesh)