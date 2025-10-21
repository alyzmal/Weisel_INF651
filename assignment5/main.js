const submitBtn = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const msgOutput = document.getElementById('outputDiv');
const mouseTracker = document.getElementById('mouseTracker');
const coords = document.getElementById('coordinates');

function submit() {
    const name = nameInput.value.trim();
    if (name == '') {
        msgOutput.style.backgroundColor = "white";
	    msgOutput.style.color = "red";
        msgOutput.innerHTML = "Error: Please enter a name.";
    } else {
        msgOutput.style.backgroundColor = "green";
        msgOutput.style.color = "white";
        msgOutput.innerHTML = `Welcome, ${name}!`;
    }
}

submitBtn.addEventListener('click', submit);
nameInput.addEventListener('keydown', function(event) { if (event.key === "Enter") submit(); });
mouseTracker.addEventListener('mousemove', function(event) { coords.innerHTML = `Mouse coordinates: X: ${event.clientX}, Y: ${event.clientY}`; });
