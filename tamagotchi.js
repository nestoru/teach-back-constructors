function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = () => {
    if( this.hungry ) {
      console.log('That was yummy');
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("No thanks! I'm full");
    } 
  } 
  this.sleep = () => {
    if( this.sleepy ) {
      console.log('Zzzzzzzzzz');
      this.sleepy = false;
      this.bored = true;
      increaseAge();
    } else{
      console.log("No way! I'm not tired");
    }
  }
  this.play = () => {
    if( this.bored ) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    } else {
       console.log('Not right now. Later?');
    }
  }
  this.increaseAge = () => {
    this.age++;
    console.log('Happy Birthday to me! I am ' + this.age + ' old');
  }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = () => {
  console.log('Woof! Woof!');
}
dog.goOutside = () => {
  if( ! this.outside ) {
    console.log('Yay! I love outdoors!');
    this.outside = true;
    bark();
  } else {
    console.log('We are already outside though');
  }
}
dog.goInside = () => {
  if( this.outside ) {
    console.log('Do we have to? Fine ...');
    outside = false;
  } else {
    console.log("I'm already inside...");
  }
}
  
var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = () => {
  console.log('Meow! Meow!');
}
cat.destroyFurniture = () => {
  if( this.houseCondition != 0 ) {
    this.houseCondition -= 10;
    console.log('MUAHAHAHAHA! TAKE THAT FURNITURE');
    this.bored = false;
    this.sleepy = true;
  }
}
cat.buyNewFurniture = () => {
  this.houseCondition += 50;
  console.log('Are you sure about that?');
}

function getModuleThis() {
  return this;
}

var animal = process.argv[2];
var method = process.argv[3];

// with eval
eval(animal + '.' + method + '()');

// with explict this: works only
this.cat = cat;
this.dog = dog;
this[animal][method]();

// with export
module.exports = {
    cat: cat,
    dog: dog
}
module.exports[animal][method]();

// with any global variable wrapper
myglobal = {
    cat: cat,
    dog: dog
}
myglobal[animal][method]();
