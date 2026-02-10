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
