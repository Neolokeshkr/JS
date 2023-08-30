class Person {

    constructor(name){
        this.name = name;
    }

    introduction(){
        return `Hi, I am ${this.name}`
    }
}

const person = new Person('Lokesh');

console.log(person.introduction());