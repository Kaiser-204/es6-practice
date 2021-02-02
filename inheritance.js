class Parent {
    constructor(){
        this.fatherName = "don";
    }
}



class Child extends Parent{
    constructor(name){
        super();
        this.name = name ;
    }
    getFullName(){
       return this.name + " " + this.fatherName ;
    }
}
const baby = new Child("kaiser");
console.log(baby.getFullName());