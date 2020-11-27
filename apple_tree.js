// Release 1
const {FruitTree,Fruit} = require('./tree.js');
// const Fruit = require('./tree.js');

class AppleTree extends FruitTree{
    constructor (age, height, matureAge, health) {
        super(age, height, 18, matureAge, 15, health)
      }

    produce () {
        if (this._age > this._matureAge){
            var rand = Math.random() * this._age 
            for (var i = 0; i< rand; i++){
                var qly = Math.round(Math.random())
                this._fruits.push(new Apple(qly))
            }
        }
    }
}

class Apple extends Fruit{
    constructor (quality) {
        super(quality)
    }
}

module.exports = AppleTree