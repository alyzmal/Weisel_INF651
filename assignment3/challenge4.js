let signum_check = Number(prompt("Enter a number:"));
if (signum_check == 0) {
    alert("The number is zero.");
} else {
    alert("The number is " + (signum_check > 0 ? "positive." : "negative."));
}
