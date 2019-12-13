function numbers(){
    let i=1;
    for(;i<100;i++){
        yield i;
    }
}

console.log(numbers.next());