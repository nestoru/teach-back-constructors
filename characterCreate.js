function Character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;

  this.printStats = function() {
    var status = this.isAlive() ? 'Alive' : 'Dead';
    console.log(`${this.name} : ${this.profession} : ${this.gender} : ${this.age} years old : strength=${this.strength}  : hitPoints=${this.hitPoints} : Is ${status}!`);
  };

  this.isAlive = () => {
    return this.hitPoints < 0 ? false : true;
  }

  this.attack = (character) => {
    console.log(`${name} attacks ${character.name}`);
    character.hitPoints = character.hitPoints - this.strength;
  }

  this.levelUp = () => {
    console.log(`Level up ${name}`);
    this.age++;
    this.strength += 5;
    this.hitPoints += 25;
  }
}

var superman = new Character('Superman', 'hero', 'male', 35, 10, 100);
var wonderwoman = new Character('Wonderwoman', 'hero', 'female', 28, 10, 100);


superman.printStats();
wonderwoman.printStats();

wonderwoman.attack(superman);
superman.printStats();
wonderwoman.printStats();

wonderwoman.levelUp();
superman.printStats();
wonderwoman.printStats();

wonderwoman.attack(superman);
superman.printStats();
wonderwoman.printStats();

superman.attack(wonderwoman);
superman.printStats();
wonderwoman.printStats();

for( var i=0; i < 6; i++ ) {
  wonderwoman.attack(superman);
}
superman.printStats();
wonderwoman.printStats();

