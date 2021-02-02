// const person ={name: "kaiser", address:"bus-terminal", mobile: "01521488445", university: "Islamic", Location : "Chittagong"};
// //  console.log(person.name);

// const {name , mobile , Location} = person ;
// console.log(name,mobile,Location);
// console.log(name,mobile,Location);
// console.log(name,mobile,Location);
// console.log(name,mobile,Location);
// console.log(name,mobile,Location);

const complexObject = {
    name : "kaiser",
    info : {
        address : "Bus-terminal" 
    }
}

const {address} = complexObject.info ;
console.log(address);