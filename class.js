//creating classes

/*class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("Lexus");
*/

class ToyotaCar {
    constructor(brand) {
        this.brandName = brand;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar("Fortuner");
let lexus = new ToyotaCar("Lexus");




//inheritance
class Parent {
    hello() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    hello() {
        console.log("Hello from Child");
    }
}

let child = new Child();
child.hello();  // Output: Hello from Child





//method overriding

class person{
    eat(){
        console.log("person is eating");
        
    }
    sleep(){
        console.log("person is sleeping");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person {
    work(){
        console.log("Engineer is working");
    }
}

let eng = new Engineer();