// using inheritance
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

function Dog(raining) {
  Animal.call(this, raining, "Woof!");
}
// inherit all methods from the Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
// make the Dog constructor Dog() instead of Animal()
Dog.prototype.constructor = Dog;

function Cat(raining) {
  Animal.call(this, raining, "Meow!"); 
}
// to inherit all methods from the Animal.prototype
Cat.prototype = Object.create(Animal.prototype);
// make the Cat constructor Cat() instead of Animal()
Cat.prototype.constructor = Cat;

var dog = new Dog(true);
var cat = new Cat(false);

// calling dogs and cats makeNoise methods
dog.makeNoise();
cat.makeNoise();

// if we want, we can change an objects properties after they're created
cat.raining = true;
cat.makeNoise();

var massHysteria = function(dog, cat) {
  if (dog.raining === true && cat.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dog, cat);
console.log(Dog.prototype);
console.log(Animal.prototype);
