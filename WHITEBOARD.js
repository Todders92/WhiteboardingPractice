// Prompt #2
// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const makeSound = function(noise) {
  const obj = {
    sound: function() {
      return `${noise}`
    }
  }
  return obj;
}

const faucet = makeSound("Drip drip drip");
faucet.sound();
console.log(faucet.sound());
const oldCar = makeSound("Grumble grumble");
console.log(oldCar.sound());
const sleepyBear = makeSound("Grr... yawn");
console.log(sleepyBear.sound());



//////////////////////////////////////
// Prompt #3
// Compose a function called throw ().The throw () function should determine the 
// distance and speed a battle robot can throw a spear.This function should be unary, so you will need to use currying.
// battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"


const battleRobotThrow = function(weapon) {
  return function(distance) {
    return function(speed) {
      return `The battle robot throws the ${weapon} ${distance} yards at ${speed} miles per hour!`;
    }
  }
}

console.log(battleRobotThrow("spear")(100)(200))