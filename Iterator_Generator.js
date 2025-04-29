
//      Iterator
/* function fetchElemnt(arr){
    let idx = 0;
    function next(){
        if(idx >= arr.length){
            //return undefined;
            return {value : undefined, done : true};
        }
        const nextElement = arr[idx];
        idx++;
        //return nextElement;
        return {value : nextElement, done : false};
    }
    return next;
}
const autoFetch = fetchElemnt([3,4,5,6,7,]);
console.log(autoFetch()); // 3
console.log("End of first fetch");
console.log(autoFetch()); // 4
console.log("End of second fetch");
console.log(autoFetch()); // 5
console.log("End of third fetch");
for(let i=0;i<10000000;i++){}
console.log(autoFetch()); // 6
console.log("End of fourth fetch");
console.log(autoFetch()); // 7
console.log("End of fifth fetch");
console.log(autoFetch()); // undefined
*/

//      Generator

/*
    function* generateArray(arr){
        for(let i=0;i<arr.length;i++){
            yield arr[i];
        }   
    }
    const it = generateArray([10,20,30,40,50]); // using generator in array, if you want to perform some operation then you can easily perform in between them
    console.log(it.next()); // {value: 10, done: false}
    console.log(it.next()); // {value: 20, done: false}
    console.log(it.next()); // {value: 30, done: false}
    console.log("You may perform any operations in between them");
    console.log(it.next()); // {value: 40, done: false}
    console.log(it.next()); // {value: 50, done: false}
    console.log(it.next()); // {value: undefined, done: true}
*/

/* function* myGenerator(){
    console.log("Start of generator function");
    yield 100;
    console.log("End of first yield");
    yield 200;
    console.log("End of second yield");
    yield 300;
    console.log("End of third yield");
    yield 400;
    console.log("End of fourth yield");
}
const it = myGenerator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

//  passing parameters to generator function
/*function* gen(){
    console.log("Start of generator function");
    const  x = yield 100;
    // console.log("End of first yield", x);       
    const y = x + 200;
    yield y;
    console.log("End of second yield", y);
}
const it = gen();
console.log(it.next()); // {value: 100, done: false}
console.log(it.next(200)); // {value: 400, done: false}
console.log(it.next()); // {value: undefined, done: true}
*/ 

//  Generator function with return statement === wrong practice
/*function* gen(){
    console.log("Start of generator function");
    const  x = yield 100;
    // console.log("End of first yield", x); 
    return 89;      
    const y = x + 200;
    yield y;
    console.log("End of second yield", y);
    return "End of generator function"; // wrong practice
}
const it = gen();
console.log(it.next()); // {value: 100, done: false}
console.log(it.next(200)); // {value: 89, done: true}
console.log(it.next()); // {value: undefined, done: true}
*/

function* gen(){
    console.log("Start of generator function");
    const  x = yield 100;
    // console.log("End of first yield", x); 
   // return 89;      
    const y = x + 200;
    yield y;
    console.log("End of second yield", y);
    return "End of generator function"; // wrong practice
}
const it = gen();
const x = it.next(); // {value: 100, done: false}
const y = it.next(x.value); 
console.log("y is : ", y); // {value: 300, done: false}
console.log("x is : ", x); // {value: 100, done: false}