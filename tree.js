class FruitTree {

    constructor (age = 0, height = 0, maxAge = 23, matureAge = 3, stopAge = 17, healthStatus = true) {
        this._age = age;
        this._healthStatus = healthStatus
        this._fruits = []
        this._height = height
        this._maxAge = maxAge
        this._harvested = ""
        this._matureAge = matureAge
        this._stopAge = stopAge
      }

    get height () {
        return this._height.toFixed(2)
    }

    get age () {
        return this._age
    }

    get matureAge () {
        return this._matureAge
    }

    get healthStatus () {
        return this._healthStatus
    }

    get harvested () {
        return this._harvested
    }

    grow () {
        this._age += 1

        if (this._age < this._maxAge) this._height += Math.random() * 2
        else this._healthStatus = false

    }

    harvest () {
        var good_mango = 0
        var bad_mango = 0

        for (var i = 0; i< this._fruits.length ; i++){
            var mango = this._fruits[i]
            if (mango._quality == 1) good_mango += 1
            else bad_mango += 1
        }
        this._harvested = this._fruits.length + " ( " + good_mango + " good, " +bad_mango+ " bad )"
    }

    produce (){
      this._fruits = []
    }

  }


  class Fruit {
    constructor (quality) {
        this._quality = quality
      }
  }


  module.exports = {FruitTree,Fruit}
//   module.exports = Fruit