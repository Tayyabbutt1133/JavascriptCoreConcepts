//By using Async Functions,you reduce the need for method chaining and nested callbacks.

// await only use in async function.

function api()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
        }, 2000);
    });
}
function api2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
        }, 2000);
    });
}
function api3()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
        }, 2000);
    });
}

// Async await works like a queue where  one thing if taking time it goes in the queue so that we can perform other tasks which decrease time complexity and also space complexity as well.
async function getWweatherData()
{
    // Function 1
    await api();
    // function 2
    await api2();
    // Function 3
    await api3();
}