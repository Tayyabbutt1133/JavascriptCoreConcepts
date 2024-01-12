
// objects in javscript

// it is an entity having some states and some behavior
// Objects in javscript had some special properties called prototypes.
// Prototypes has some in built methods as well.
const Tinfo = {
    FullName: "Tayyeb",
    marks: 23,
    printMarks:function () {
        console.log("Marks are:", this.marks);
    }
}


const tayyeb = {
    salary: 100000
}

tayyeb.__proto__ = Tinfo;


// classes in javascript
// classes are the program code template for creating objects.
// Those objects will have some state(variables) & some behaviour (functions) inside it.


class mycar
{
    // method 1
    start()
    {
        console.log("Mycheck should be start");
    }
    // method 2
    stop()
    {
        console.log("Mycheck should be stop");
    }
}

let audi = new mycar;












