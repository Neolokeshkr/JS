//  The fetch API
    // the fetch() function to make a network request, it returns a Promise that resolves to a Response object. This object contains various properties and methods that allow you to work with the response data.

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`response.status +' '+ response.statusText`)
//         } 
//             return response.json()
//         }
//         )
//     .then(data => console.log(data))
//     .catch (err => console.log(err))

// Async Await

async function getNetworkCall(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    // console.log(data)
    return data

}

// await getNetworkCall()
// console.log(getNetworkCall());

async function tryNetworkCall() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/q');
        if(!response.ok){
            throw new Error(`Error ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        return data 
    }
    catch(err){
        console.error(err)
    }
}

async function displayData(){
    try{
        const data = await tryNetworkCall();
        console.log('Data:\n', data);
    }catch(err){
        console.log(err);
    }
}

displayData();