var util = require('util');

module.exports = function(gender, weight){
  var maxPPM = 1.5, 
      coefficient,
      rawSpirit,
      spirit,
      vodka,
      beer,
      wine;

  switch (gender) {
    case 'male': 
      coefficient = 0.7;
      break;
    case 'female': 
      coefficient = 0.6;
      break;
    default:
      console.log('You have entered invalid gender.');
      return;
  }

  if(weight<35 || weight>150 || weight===undefined){
    console.log("Your weight should be between 35 and 150 kilos.");
    return;
  }

  rawSpirit = maxPPM*weight*coefficient;
  spirit = rawSpirit/0.79;
  vodka = Math.round(spirit/40*110);
  beer = Math.round(spirit/4.7*110);
  wine = Math.round(spirit/11*110);

  var result = util.format('For a good mood you enough(~1.5 ppm): Vodka: %dml, Beer: %dml, Wine: %dml', vodka, beer, wine);

  console.log(result);
  return result;
}