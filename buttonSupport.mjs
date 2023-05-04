var x = 0;
var y = 1;
var catgirls = 0;
var totalUwu = 0;
var mineCount = 0;
var metalCount = 0;
checkTime();
function numberIncrease() {
    var numberElement = document.getElementById("number");
    x += y;
    totalUwu += y;
    numberElement.textContent = x;
    const uwupersec = Math.floor(catgirls * (1 + totalUwu / 10));
    if (catgirls > 0) {
      document.getElementById("ups").textContent = `UwUs per second: ${uwupersec}`;
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
    var catgirlPrice = Math.floor(((((catgirls) * 2) * 700) / 3) + 100);
    var catgirlElement = document.getElementById("catgirl");
    catgirlElement.textContent = `catgirl (-${catgirlPrice})`;
    var catCountElement = document.getElementById("kitty");
    catCountElement.textContent = `number of catgirls: ${catgirls}`;
    if (x > catgirlPrice){
        x = x-catgirlPrice;
        catgirls++;
        catCountElement.textContent = `number of catgirls: ${catgirls}`;
    } else {
        catCountElement.textContent = "you don't have enough uwus";
    }
    var catgirlPrice = Math.floor(((((catgirls) * 2) * 700) / 3) + 100);
}

function catgirlMine() {
  var mineBuyElement = document.getElementById("mineBuy");
  var mineCountElement = document.getElementById("mineCount");
  var minePrice = (mineCount+1)*100000;
  var minePriceCatgirl = 50*mineCount;
  var warningElement = document.getElementById("warning");
  mineBuyElement.textContent = `buy mine -(${minePrice})`;
  if (x > minePrice && catgirls > minePriceCatgirl){
    mineCount++;
    x -= minePrice;
    catgirls -= minePriceCatgirl;
    mineCountElement.textContent = `mines: ${mineCount}`;
  } else if (x < minePrice && catgirls < minePriceCatgirl) {
    warningElement.textContent(`not enough catgirls or uwus`);
  } else if (x < minePrice) {
    warningElement.textContent('not enough uwus');
  } else if (catgirls > minePriceCatgirl) {
    warningElement.textContent(`not enough catgirls`);
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
    metalCount = metalCount+(mineCount*10);
    var metalPerSecond = document.getElementById("mps");
    metalPerSecond.textContent = metalCount+((mineCount*10)*(totalUwu*0.01+1));
}, 1000);

setInterval(function() {
    x += Math.floor(catgirls*(1+(totalUwu/10)));
    var numberElement = document.getElementById("number");
    numberElement.textContent = x;
  }, 1000);

  setInterval(function() {
    const uwupersec = Math.floor(catgirls * (1 + totalUwu / 10));
    if (catgirls > 0) {
    document.getElementById("ups").textContent = `UwUs per second: ${uwupersec}`;
    }
  }, 1000);

  function setDarkMode() {
    document.getElementById("stylesheet").href = "darkMode.css";
  }
  
  function setLightMode() {
    document.getElementById("stylesheet").href = "pastel.css";
  }
  
  function checkTime() {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour >= 21 || hour < 7) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }
  
  //update the catgirl cost
  setInterval(function(){
    var catgirlPrice = Math.floor(((((catgirls) * 2) * 700) / 3) + 100);
    var catgirlElement = document.getElementById("catgirl");
    catgirlElement.textContent = `catgirl (-${catgirlPrice})`;

  }, 1000);
  
