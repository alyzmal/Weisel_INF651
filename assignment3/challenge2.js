const correct_PIN = "0279";
let entered_PIN = "";
do {
    entered_PIN = prompt("Enter the PIN:");
} while (entered_PIN != correct_PIN);
alert("You entered the correct PIN!");
