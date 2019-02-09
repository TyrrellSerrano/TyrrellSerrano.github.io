var clouds = ["one", "two", "three", "four", "five", "six",];
var counter = 0;
var old = 0;

function next() {
    document.getElementById(clouds[counter]).className = "pos front";
    if (counter >= 5) {
        document.getElementById(clouds[old]).className = "pos";
        document.getElementById(clouds[5]).className = "pos";
        old = 0;
        counter = 0;
    }
    else if (counter >= 1) {
        document.getElementById(clouds[old]).className = "pos";
        old = counter;
        counter++;
    }
    else {
        old = counter;
        counter++;
    }
}