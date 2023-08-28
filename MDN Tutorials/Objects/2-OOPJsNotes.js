// OOP
    // 1. Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system.
    // 2.  Objects contain both functions (or methods) and data.
    // 3. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

    // Classes and instances
        // 1. When we model a problem in terms of objects in OOP, we create abstract definitions representing the types of objects we want to have in our system.
        // 2. For example, if we were modeling a school, we might want to have objects representing professors. Every professor has some properties in common: they all have a name and a subject that they teach. Additionally, every professor can do certain things: they can all grade a paper and they can introduce themselves to their students at the start of the year, for example.
            // Pseudocode: 
                    /* 
                        class Professor
                            properties
                                name
                                teaches
                            methods
                                grade(paper)
                                introduceSelf()
                    */
        // 3. On its own, a class doesn't do anything: it's a kind of template for creating concrete objects of that type.
        // 4. Each concrete professor we create is called an instance of the Professor class.
        // 5. The process of creating an instance is performed by a special function called a constructor.
        // 6. We pass values to the constructor for any internal state that we want to initialize in the new instance.

        // Generally, the constructor is written out as part of the class definition, and it usually has the same name as the class itself:
            // Pseudocode:
            /*     
                class Professor
                properties
                    name
                    teaches
                constructor                     // This constructor takes two parameters, so we can initialize the name and teaches properties when we create a new concrete professor.
                    Professor(name, teaches)
                methods
                    grade(paper)
                    introduceSelf()
             */

            // Programming languages often use the keyword new to signal that a constructor is being called.
                const p = new Professor('Sanjeev','Theorotical Physics');

    // Inheritance
        // 1. Suppose in our school we also want to represent students.
        // Psuedocode:
            /* class Student
                properties
                    name
                    year
                constructor
                    Student(name, year)
                methods
                    introduceSelf() */

        // 2. It would be helpful if we could represent the fact that students and professors share some properties, or more accurately, the fact that on some level, they are the same kind of thing. Inheritance lets us do this.
        // 3. We can model this by defining a new class Person, where we define all the common properties of people. Then, Professor and Student can both derive from Person, adding their extra properties:
        // Pseudocode:
            /*     
                class Person
                    properties
                        name
                    constructor
                        Person(name)
                    methods
                        introduceSelf()

                class Professor : extends Person
                    properties
                        teaches
                    constructor
                        Professor(name, teaches)
                    methods
                        grade(paper)
                        introduceSelf()

                class Student : extends Person
                    properties
                        year
                    constructor
                        Student(name, year)
                    methods
                        introduceSelf()
             */

            // In this case, we would say that Person is the superclass or parent class of both Professor and Student. Conversely, Professor and Student are subclasses or child classes of Person.

            // You might notice that introduceSelf() is defined in all three classes. The reason for this is that while all people want to introduce themselves, the way they do so is different:

                walsh = new Professor("Walsh", "Psychology");
                walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

                summers = new Student("Summers", 1);
                summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

            // This feature - when a method has the same name but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the superclass's implementation, we say that the subclass overrides the version in the superclass.

            // When a method in a subclass replaces the superclass's implementation, we say that the subclass overrides the version in the superclass.

        // Encapsulation
            // 1. Objects provide an interface to other code that wants to use them but maintain their own internal state. 