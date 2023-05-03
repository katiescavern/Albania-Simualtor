let x = 0;
let y = 1;
function numberIncrease() {
    var numberElement = document.getElementById("number");
    x += y;
    numberElement.textContent = x;
    
}
function numberIncrease2() {
    var textElement = document.getElementById("text");
    if (x > 9) {
        var numberElement = document.getElementById("number");
        y++;
        x=x-10;
        textElement.textContent = (`number of uwus per click: ${y}.`);
        numberElement.textContent = x;
    } else {
        textElement.textContent = (`not enough uwus`);

    }
    
    
}