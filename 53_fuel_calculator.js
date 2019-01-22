// Pour utiliser une condition dans un Swith, il faut mettre le bool en paramètre du Switch

function fuelPrice(litres, pricePerLiter) {
  
  let result = litres * pricePerLiter;
  
  switch(true) {
    case litres >= 10:
        result -= (0.25 * litres);
        console.log("When litres >= 10, the result equals " + result);
        break;
    case litres >= 8:
        result -= (0.20 * litres);
        console.log("When litres >= 8, the result equals " + result);
        break;
    case litres >= 6:
        result -= (0.15 * litres);
        console.log("When litres >= 6, the result equals " + result);
        break;
    case litres >= 4:
        result -= (0.10 * litres);
        console.log("When litres >= 4, the result equals " + result);
        break;
    case litres >= 2:
        result -= (0.05 * litres);
        console.log("When litres >= 2, the result equals " + result);
        break;
  }
  console.log(typeof result);
  
  return Number.parseFloat(result.toFixed(2));result;
}

fuelPrice(8, 2.5);


// Other solution

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}

// That's all folks !
