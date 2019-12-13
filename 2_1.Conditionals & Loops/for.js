let i=1;
let arr=[1,2,3,4,5,6,7,8,9,20];
/*
for(i=1;i<100;i++){
    console.log(i);
}
*/

var person={
  "name":"Giridher",
  "fathername":"Yadagiri",
  "phone":"9676211990"
}





for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach(n => {
    console.log(n);
});


// Accessing Elements of an array using for in
for (let i in arr){
    console.log(arr[i]);
}



// Accessing properties of an object using for in

for (let prop in person){
    console.log(prop+":"+person[prop]);
}


// Do While Loop

i=1;
do
{
console.log(i);
i++;
}while(i<100);