let table_number = Number(prompt("Enter a number:"));
for (let i = 1; i <= 10; i++) {
    if ((table_number * i) % 5 == 0) {
    	continue;
    } else {
	console.log(table_number + " x " + i + " = " + (table_number * i));
    }
}
