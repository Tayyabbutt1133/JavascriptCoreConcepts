// The fetch Api provides an interface for fetching (Sending/Recieveing) resources

// It uses Request and response objects.
// The fetch() method us used to fetch a resource(data)

// API: Application Programmer interface.


// Ajax is Asynchronous js and XMl.
// JSON is a Javascript Object Notation.
// Json Method()

const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#facts");
const para = document.querySelector("#factpara");

const getFacts = async () => {
    console.log("Fetching data.....");
    let response = await fetch(URL);
    console.log(response);  // this is actually in the form of javascript which we cannot use or readable
    let data = await response.json();  // we actually use Json() to get valuable data that we can read or use
    console.log(data[1].text);
    para.innerText = data[1].text;
}
btn.addEventListener("click", getFacts);