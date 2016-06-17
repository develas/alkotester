module.exports = function(gender, weight){
  if (!['male', 'famale'].includes(gender)) throw new Error('You have entered invalid gender');
  if (!weight || weight<35 || weight>150) throw new Error('Your weight should be between 35 and 150 kilos');

  var maxPPM = 1.5,
      coefficient = gender === 'male' ? 0.7 : 0.6,
      rawSpirit = maxPPM*weight*coefficient,
      spirit = rawSpirit/0.79;

  return {
    vodka: Math.round(spirit/40*110),
    beer: Math.round(spirit/4.7*110),
    wine: Math.round(spirit/11*110)
  };
}

