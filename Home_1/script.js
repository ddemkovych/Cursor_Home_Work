const winePrise = 123.965;
const cheesePrise = 90.2345;
const coffeePrise = 15.678;


//максимальне число
let maxPrise = (Math.max(winePrise, cheesePrise, coffeePrise));
console.log(maxPrise);

//мінімальне число
let minPrise = (Math.min(winePrise, cheesePrise, coffeePrise));
console.log(minPrise);

//Сума усіх товарів
let sumaPrise = (winePrise + cheesePrise + coffeePrise);
console.log(sumaPrise);

//Округлення
let lowerPrice = Math.floor(winePrise) + Math.floor(cheesePrise) + Math.floor(coffeePrise);
console.log(lowerPrice);

//Округлену до сотень
let hundRound = (Math.ceil(sumaPrise / 100) * 100);
console.log(hundRound);

//Сума товарів є
let sumOfall = Math.floor(sumaPrise) % 2 === 0 ? 'true' : 'false';
console.log(sumOfall);

//Суму решти
const allMoney = 500;
let cash = allMoney - sumaPrise;
console.log(cash);

//Середнє значення цін з округленням
let averageValue = (sumaPrise / 3).toFixed(2);
console.log(averageValue);


//Більш складна Задача

//Випадкова знижка %
let getRandom = (Math.random() * 100).toFixed(0);
console.log(getRandom)

//Сума до оплати
let discount = (sumaPrise - sumaPrise * getRandom / 100).toFixed(2);
console.log(discount);

//Чистий прибуток
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

