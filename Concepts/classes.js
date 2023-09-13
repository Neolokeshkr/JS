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

class Professor extends Person{
    
    constructor(name, teaches){
        super(name)
        this.teaches = teaches
    }

    
}