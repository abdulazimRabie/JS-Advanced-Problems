// private - getter and setter
class CoffeMachine {
  _waterAmount = 0;

  constructor(power) {
    this.power = power;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  set waterAmount(amount) {
    if (amount < 0) {
      amount = 0;
    }
    this._waterAmount = amount;
  }
}

const coffemachine = new CoffeMachine(3);
coffemachine.waterAmount = -11;
console.log(coffemachine.waterAmount);

// read only
class Machine {
  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

const machine = new Machine(100);
console.log(machine.power); // 100
machine.power = 33;
console.log(machine.power); // 100


// extending
class LittleCoffeMachine extends CoffeMachine {
  constructor(power) {
    super(power);
  }

  msgWater() {
    console.log(this._waterAmount , 'amount of little coffe water');
  }
}

const littleCoffemachine = new LittleCoffeMachine(200);
littleCoffemachine.msgWater();

// ================================
// ================================
// ================================

// private #
class Building {
  #layer = 5;

  constructor() {
  }

  #handleLayers(layer) {
    if(layer > 10) layer = 9;
    this.#layer = layer;
  }

  getLayer() {
    return this.#layer;
  }

  setLayer(layer) {
    this.#handleLayers(layer);
  }
}

const building = new Building();
console.log(building.getLayer());
building.setLayer(34);
console.log(building.getLayer());

// private properties and methods are not extendable
// can't be inherited
