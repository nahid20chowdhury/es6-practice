class Parent {
    constructor() {
        this.fatherName = "Schwerzneggar"
    }
}
class Child extends Parent {
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
    }
    getFullName() {
        return this.name + " " + this.fatherName
    }
}

const baby = new Child("Arnold", 7)
const baby2 = new Child("Tom", 3)
console.log(baby.getFullName())
console.log(baby2)