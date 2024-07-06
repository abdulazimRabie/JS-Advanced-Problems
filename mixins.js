let say = {
  say(phrase) {
    console.log(phrase);
  }
}

let greeting = {
  __proto__: say,

  sayHi() {
    super.say(`hi ${this.name}`)
  },

  sayBye() {
    super.say(`bye ${this.name}`)
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

// Object.assign(User.prototype, greeting);
Object.setPrototypeOf(User.prototype, greeting)
const user = new User('dude');
user.sayHi();
user.sayBye();



// =============================
// =============================
// Factory Mixin Method

const PetMixin = (SuperClass) => class Pet extends SuperClass {
  printInfo() {
    console.log(`hi, iam ${this.name}`);
  }
}

class Alien {
  conquerEarth() {
    console.log(`${this.name} says :  HAHAH , Earth is mine`);
  }
}

class Robot {
  move() {
    console.log(`${this.name} is robot, and it cane move four directions`);
  }
}

class AlienCat extends PetMixin(Alien) {
  constructor(name) {
    super();
    this.name = name;
  }
}

const alienCat = new AlienCat('toto');
alienCat.printInfo();
alienCat.conquerEarth();


class RobotCat extends PetMixin(Robot) {
  constructor(name) {
    super();
    this.name = name;
  }
}

const robotCat = new RobotCat('lala');
robotCat.printInfo();
robotCat.move();
// alienCat.conquerEarth();

