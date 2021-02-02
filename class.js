class Student {
    constructor(sID , SName){
        this.id = sID;
        this.name = SName ;
    }
}

const Student1 = new Student(15 , "lija");
const Student2 = new Student(25 , "kaiser");

console.log(Student1.name , Student2.name);