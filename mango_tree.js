const {FruitTree,Fruit} = require('./tree.js');

class MangoTree extends FruitTree{

    // Initialize a new MangoTree
    constructor (age, height, matureAge, health) {
    super(age, height, 23, matureAge, 17, health)
    }
  
    // Produce some mangoes
    produce () {
        if (this.age > this._matureAge){
            var rand = Math.random() * (this._age * 1.2)
            for (var i = 0; i< rand; i++){
                var qly = Math.round(Math.random())
                this._fruits.push(new Mango(qly))
          }
      }
  }
  
}
  
class Mango extends Fruit{
    // Produce a mango
    constructor (quality) {
      super(quality)
  }
}

module.exports = MangoTree