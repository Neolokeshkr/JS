// Arrow Functions
    // Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:
        const listItems = chemists.map(person =>
            <li>...</li> // Implicit return!
        );
    
    // However, you must write return explicitly if your => is followed by a { curly brace!
        const listItems2 = chemists.map(person => { // Curly brace
            return <li>...</li>;
        });
