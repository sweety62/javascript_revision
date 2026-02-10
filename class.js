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

/*class person{
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

let eng = new Engineer();*/

//using super keyword
class person{
    constructor(name){
        this.species = "Homo Sapiens";
        this.name = name;
    }
    eat(){
        console.log("person is eating");
        
    }
    
    
     
    
}

class Engineer extends person {

    constructor(name){
        super(name);//to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("Engineer is working");
    }
}

let eng = new Engineer();



//creating a websites for your colleges.create  a class user with two properties name and email

let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data=", DATA);
    }
}

let student1 = new User("sweety", "sweety@gmail.com");
let student2 = new User("raja", "raja@gmail.com");

student1.viewData();
student2.viewData();