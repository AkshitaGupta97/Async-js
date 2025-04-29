/* function forLoop(){
    console.log("Loop Starts...");
    for(let i=0;i<100000000;i++){}
    console.log("Loop Ends....")
}
function RunTime0(){
    console.log("Start Timer 0 .....");
    setTimeout(function exec(){
        console.log("Complete Timer 0 .....!");
        for(let i=0;i<10000000000;i++){}
    }, 5000)
    console.log("End Timer 0 .....");
}
function RunTime1(){
    console.log("Start Timer 1.....");
    setTimeout(function exec(){
        console.log("Complete Timer 1 .....!");
        for(let i=0;i<10000000000;i++){}
    }, 2000)
    console.log("End Timer 1 .....");
}
function RunTime2(){
    console.log("Start Timer 2.....");
    setTimeout(function exec(){
        console.log("Complete Timer 2 .....!");
        for(let i=0;i<10000000000;i++){}
    }, 1000)
    console.log("End Timer 2 .....");
}
console.log("Starting the code ....");
forLoop();
RunTime0();
RunTime1();
RunTime2();
console.log("Last line of code ....");
*/
//     RESOLVE 
/* console.log("Resolving the promise...");
setTimeout(function f(){
    console.log("Timer 1 complete!");
})
for(let i=0;i<10000000000;i++){}
let x = Promise.resolve("Akshita's Promise");
x.then(function processPromise(value){
    console.log("Promise resolved with value : ", value);
})
setTimeout(function fun(){
    console.log("Timer 2 complete!");
})
console.log("End of File...");

*/

// Find Output
Promise.resolve("Foo")
.then(
    (String)=>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                String += "Bar";
                res(String);
            }, 1);
        });
    }
)
.then((String)=>{
    setTimeout(()=>{
        String += "Baz";
        console.log(String);
    }, 1)
    return String;
})
.then((String)=>{
    console.log("Last line of OOPs will continue, but not wait for the previous one to finish...", String);
    console.log(String);
})

