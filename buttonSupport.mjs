let x = 0;
let y = 1;
var catgirls = 0;
var totalUwu = 0;
function numberIncrease() {
    var numberElement = document.getElementById("number");
    x += y;
    totalUwu += y;
    numberElement.textContent = x;
    if (catgirls > 0) {
        var uwupersec = Math.floor(catgirls*(1+(totalUwu/10)));
        upsElement.textContent = `UwUs per second: ${uwupersec}`;
    }
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


  function catgirlPurchase() {
    var catgirlPrice = Math.floor((((catgirls * 2) * 700) / 3) + 100);
    var catgirlElement = document.getElementById("catgirl");
    catgirlElement.textContent = `catgirl (-${catgirlPrice})`;
    var catCountElement = document.getElementById("kitty");
    catCountElement.textContent = `number of catgirls: ${catgirls}`;
    if (x > catgirlPrice){
        x = x-catgirlPrice;
        catgirls++;
        catCountElement.textContent = `number of catgirls: ${catgirls}`;
        var upsElement = document.getElementById("ups");
        var uwupersec = math.Floor(catgirls*(1+(totalUwu/10)));
        upsElement.textContent = `UwUs per second: ${uwupersec}`;
    } else {
        catCountElement.textContent = "you don't have enough uwus";
    }
}

function toggleStyles() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet.getAttribute("href") == "pastel.css") {
      stylesheet.setAttribute("href", "darkMode.css");
    } else {
      stylesheet.setAttribute("href", "pastel.css");
    }
  }



setInterval(function() {
    x += Math.floor(catgirls*(1+(totalUwu/10)));
  }, 1000);