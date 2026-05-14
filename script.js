/////////////////////////////
// 1. COFFEE PAGE FUNCTIONS
/////////////////////////////

// Runs when coffee page loads
function welcomeMessage() {
    document.getElementById("welcome").innerHTML =
        "Welcome to Montes Coffee Shop!";
}


// Handles coffee club form submission
function submitForm() {

    let name = document.getElementById("name").value;

    if (name === "") {
        document.getElementById("output").innerHTML =
            "Please enter your name before submitting.";
    } else {
        document.getElementById("output").innerHTML =
            "Thanks for joining, " + name + "!";
    }

    return false;
}


// Featured drink generator (coffee page interaction)
function pickFeaturedDrink() {

    let drinks = [
        "All Things Maple",
        "Raspberry Danish Latte",
        "Truefolk Einspanner",
        "Einspanner"
    ];

    let randomIndex = Math.floor(Math.random() * drinks.length);
    let selectedDrink = drinks[randomIndex];

    if (selectedDrink === "All Things Maple") {
        document.getElementById("featuredDrink").innerHTML =
            "Today's featured drink is: All Things Maple 🍁";
    } 
    else if (selectedDrink === "Raspberry Danish Latte") {
        document.getElementById("featuredDrink").innerHTML =
            "Today's featured drink is: Raspberry Danish Latte 🍓";
    } 
    else if (selectedDrink === "Truefolk Einspanner") {
        document.getElementById("featuredDrink").innerHTML =
            "Today's featured drink is: Truefolk Einspanner ☕";
    } 
    else {
        document.getElementById("featuredDrink").innerHTML =
            "Today's featured drink is: Einspanner ✨";
    }
}



/////////////////////////////
// 2. BAKERY PAGE FUNCTION
/////////////////////////////

// Button click for bakery special
function showBakerySpecial() {

    document.getElementById("bakeryMessage").innerHTML =
        "Fresh cinnamon rolls are warm and ready right now!";
}



/////////////////////////////
// 3. MATCHA PAGE FUNCTION
/////////////////////////////

// Button click for matcha history
function showMatchaHistory() {

    document.getElementById("matchaHistory").innerHTML =
        "Matcha has been used in Japanese tea ceremonies for centuries and is made from shade-grown green tea leaves that are stone-ground into a fine powder.";
}