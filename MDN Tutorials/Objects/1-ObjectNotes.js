// Two types of objects:
    // 1. Object literal - object created literally by writing out
    // 2. Instantiated Objects - Objects instantiated from classes

    // Example object literal
        const person = {
            name : ['Lokesh','Kumar'],
            address: {
                city: "Delhi",
                country: 'India'
            },
            age : 23,
            bio() {
                console.log(`Hi I am ${this.name[0]} and I am ${this.age} yrs old`)
            },
            getAddress() {
                console.log(`I live in ${this.address.city}, ${this.address.country}.`)
            },
            getThis() {
                console.log('This ->')
                console.log(this);
            }
        }

// Accessing Objects
    // 1. Dot Notation
        person.bio()
        person.getAddress()
        console.log(person.address.city);

    // 2. Bracket Notation
        console.log(person['name'][0])
        person['bio']();
        person['getAddress']();

        // Using Bracket Notion where dot notation doesnot work

        function logProperty(propertyName){
            console.log(person.propertyName) // gives undefined
            console.log(person[propertyName]) //gives value
        }
        logProperty("age");

// Setting Objects
        // 1. Using Dot Notation
            person.age = 45;
            console.log(person.age)

        // 2. Using Bracket Notation
            person['address']['city'] = 'Mysore'
            console.log(person['address']['city'])

// Creating new Properties and Methods of object
        // Creating Property
            person.sex = 'Male'
            console.log(person.sex);
            
        // Creating Method
            person.getGender = function(){
                console.log(person.sex)
            }
            person.getGender()

            console.log(person)

// -------------------------------------------------------

// this keyword
        // The this keyword refers to the current object the code is being written inside — so in the above case this is equivalent to person.  
            person.getThis();
console.log('--------CONSTRUCTORS------------')
// Constuctors
            // Using object literals is fine when you only need to create one object, but if you have to create more than one, they're seriously inadequate.
            // We have to write out the same code for every object we create, and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.

            // A constructor is just a function called using the new keyword. When you call a constructor, it will:
 
            // create a new object
            // bind this to the new object, so you can refer to this in your constructor code
            // run the code in the constructor
            // return the new object.

            // Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this
                function Person(name, age){
                    this.name = name,
                    this.age = age,
                    this.bio = function(){
                        console.log(`Hi,  ${this.name} this side, I am ${this.age} yrs old`)
                    }
                }

                const p1 = new Person('Lokesh', 28);
                p1.bio()



// ----------------Object Prototypes------------------------------
console.log('--------Object Prototypes------------')
    // Prototypes are the mechanism by which JavaScript objects inherit features from one another.
        const myObject = {
            city: "Madrid",
            greet() {
              console.log(`Greetings from ${this.city}`);
            },
          };

        // If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

        // What are these extra properties, and where do they come from????
            //   Every object in JavaScript has a built-in property, which is called its prototype( can be accessed by .__proto__). The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
            // Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

        // When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

        myObject.__proto__.__proto__ //null

        obj.__proto__ === Object.prototype && obj.__proto__ === Object.getPrototypeOf(obj) // returns true

        Object.getPrototypeOf(myObject) // Returns Object{} or Object.prototype
        //  Above statement returns an object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain:
            Object.prototype.__proto__ //returns null
            Object.getPrototypeOf(Object.prototype) // returns null

        // The prototype of an object is not always Object.prototype

        // Program to see all the prototypes in a prototype chain.
            function getAllPrototypes(anyObject){
              let object = anyObject
              do{
                //   console.dir(object?.constructor?.name)
                  object = Object.getPrototypeOf(object);
                  console.dir(object)
              } while(object)
            }

            getAllPrototypes(new Date())

    // Shadowing properties
            // What happens if you define a property in an object, when a property with the same name is defined in the object's prototype? Let's see:
                const myDate = new Date(1995, 11, 17);
                console.log(myDate.getYear()); // 95

                // shadowed property
                myDate.getYear = function () {
                  console.log("something else!");
                };
                myDate.getYear(); // 'something else!'

            // When we call getYear() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getYear() to myDate, then the version in myDate is called.
            // This is called "shadowing" the property.

    // Setting Prototypes

        // Using Object,create

            const personPrototype = {
                greet() {
                  console.log("hello!");
                },
              };

              const carl = Object.create(personPrototype);
              carl.greet(); // hello!

        // Using Constructor
            //   In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).