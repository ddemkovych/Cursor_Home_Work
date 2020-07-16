let winePrise = 123.965;
let cheesePrise = 90.2345;
let coffeePrise = 15.678;


//
let maxPrise = (Math.max(winePrise, cheesePrise, coffeePrise));
console.log(maxPrise);

//
let minPrise = (Math.min(winePrise, cheesePrise, coffeePrise));
console.log(minPrise);

//
let sumaPrise = (winePrise + cheesePrise + coffeePrise);
console.log(sumaPrise);

//
let lowerPrice = Math.floor(winePrise) + Math.floor(cheesePrise) + Math.floor(coffeePrise);
console.log(lowerPrice);

//
let hundRound = (Math.floor(sumaPrise / 100) * 100);
console.log(hundRound);

//
let sumOfall = Math.floor(sumaPrise) % 2 === 0 ? 'true' : 'false';
console.log(sumOfall);

//
let cash = 500 - sumaPrise;
console.log(cash);

//
let averageValue = (sumaPrise / 3).toFixed(2);
console.log(averageValue);

//Більш складне

let getRandom = (Math.random() * 100).toFixed(0);
console.log(getRandom)

let discount = (sumaPrise - sumaPrise * getRandom / 100).toFixed(2);
console.log(discount);

let profit = (sumaPrise / 2 - (sumaPrise - discount)).toFixed(2);
console.log(profit);



let div = document.querySelector("div")
div.innerHTML = `
  <p> Максимальне число: ${maxPrise};</p>
  <p> Мінімальне число: ${ minPrise};</p>
  <p>Сума усіх товарів: ${sumaPrise};</p>
  <p>Округлення: ${lowerPrice};</p>
  <p>Округлену до сотень: ${hundRound};</p>
  <p>Сума товарів є: ${sumOfall};</p>
  <p>Суму решти: ${cash};</p> 
  <p>Середнє значення цін з округленням: ${averageValue};</p>
  <p>Випадкова знижка: ${getRandom};</p>
  <p>Сума до оплати: ${discount};</p>
  <p>Чистий прибуток: ${profit};</p>`

