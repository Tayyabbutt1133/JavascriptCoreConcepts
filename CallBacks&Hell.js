// Asynchronous programming is a programming paradigm that allows code to execute non-blocking operations. In synchronous programming, each operation blocks the execution of code until it completes, meaning the program waits for one task to finish before moving on to the next.

// There are three types of ways
// 1. Callbacks
// 2.Callbacks hell-> nested callbacks
// 3. Promises
// 4. Async/Await-now this is use

// console.log("Print 1 is done");
// setTimeout(() => {
//     console.log("Print 2 is done after some time");  // now this is async await programming
// }, 5000);
// console.log("Print 3 is done");
// console.log("Print 4 is done");


// //callbacks

// this is called hallback hell->nested callback inside one another
function getdata(InstaUsername)
{
     
    setTimeout(() => {        
        if (InstaUsername == "Tayyeb")
        {
            console.log("Your Instagram username exist", InstaUsername);
            console.log("Verifying your password");
            setTimeout(() => {
                console.log("Your Account Verifyed");
            },4000);
        }
        else
        {
           setTimeout(() => {
               console.log("Your Account with this username does not exist");
           }, 4000);    
        }
    }, 2000);
}

getdata("Tayyeb");

// there are multiple ways to do callback like you can do it inside of function calling but yes in order to decrease this we use promises.


