let arr=[1,3,4,5,6,7,8,99,9];
let subarr=[9,9,9];
let arr2= new Array(1,4,6,7,8,9,0,-8);
console.log(arr);
//console.log(arr2);
// console.log(arr[3]);
// Length of the array 
// console.log(arr.length)
// Slice Operation Extracts elements from array with given start and end index
// console.log(arr.slice(1,4));
// // Slices list from index 3 to end of list
// console.log(arr.slice(3));
arr.push(25);
// arr.push("theo");
// arr.push(subarr);
console.log(arr.sort());
// console.log(arr.pop()+" is popped from array");
// console.log("After popping an element from array");
console.log(arr.shift()+"is shifted");
//Unshift adds the element at the front
arr.unshift(100);
console.log(arr);
console.log(arr.reverse())

// Looping through an array using for

for( i =0 ;i<arr.length;i++){
    console.log(arr[i]);
}

//Looping through an array using for each

arr.forEach(e=>{

    console.log(e);

});