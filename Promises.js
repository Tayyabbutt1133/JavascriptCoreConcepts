// Promise is a object which has three states

// States in promises
// 1.Pending state
// 2.FullFilled state
// 3.Rejected state


// let promise = new Promise((resolve, reject) => {
//     console.log("Hello world");
//     reject("Some error occured");
// });



// let assume that you want to get api's from any website and it takes time to fetch so we can do another funcionality while get promise from this that it can fulfilled or reject after given time.
function getdata(dataId, getNextData)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is:", dataId);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

// and by the way we cannot create a promise , it automatically gives us in terms of some output.

// now how to handle any promise,There are two ways to handle promise:
// 1. promise.then use when promise is fullfilled or succeed
// 2. promise.catch use when promise gives an error or reject


