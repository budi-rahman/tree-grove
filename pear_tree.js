const {FruitTree,Fruit} = require('./tree.js');

class PearTree extends FruitTree{

    // Initialize a new MangoTree
    constructor (age, height, matureAge, health) {
    super(age, height, 15, matureAge, 13, health)
    }
  
    // Produce some mangoes
    produce () {
        if (this.age > this._matureAge){
            var rand = Math.random() * (this._age * 2)
            for (var i = 0; i< rand; i++){
                var qly = Math.round(Math.random())
                this._fruits.push(new Pear(qly))
            }
        }
    }
  
  }
  
class Pear extends Fruit{
    // Produce a mango
    constructor (quality) {
      super(quality)
  }
}

module.exports = PearTree