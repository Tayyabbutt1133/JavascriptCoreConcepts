
let btn = document.getElementById("toggle");
let head = document.getElementById("heading");
let CurrentMode = "white";

btn.addEventListener("click", function () {
    if (CurrentMode === "white")
    {
        CurrentMode = "Black";
        document.body.style.backgroundColor =CurrentMode;
        head.style.color = "white";
    }
    else
    {
        CurrentMode = "white";
        document.body.style.backgroundColor = CurrentMode;
        head.style.color = "Black";
    }
    console.log(CurrentMode);
})