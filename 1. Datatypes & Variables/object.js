let college={
    name:"DARE",
    place:"Khammam"
};
let person={
    FirstName:"Durga",
    LastName:"Panthangi",
    marks:[14,23,33,44,54,64],
    fullname:function(){
        return this.FirstName+" "+this.LastName;
    },
    college:college,
};

let s=function pi(){
    return 3.14231654;
}

console.log(s);
//calling the function stored in s
console.log(s());

console.log(person);

console.log(person.FirstName);
console.log(person.marks);
console.log(person.fullname());
console.log(person.college);
