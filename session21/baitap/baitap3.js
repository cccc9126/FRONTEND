
let pass = "hello123";
let Pass;

while (Pass !== pass) {
    Pass = prompt("Enter password:");

    if (Pass === pass) {
        alert("Correct password!");
    } else {
        alert("Incorrect password, try again.");
    }
}
