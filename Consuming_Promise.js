/*function getRandom(max){
    return Math.floor(Math.random()*max);  // -> it will give the random number between 0 and max value
}
function createPromise(){
    return new Promise(function exec(res, rej){
        console.log("Entering the executer callback in the promise constructor...")
        setTimeout(function f(){
            console.log("Inside the setTimeout of promise constructor...");
            const randomNum = getRandom(20);
            if(randomNum%2==0){
                res(randomNum);
            }
            else{
                rej(randomNum);
            }
        }, 10000)
        console.log("Exiting the executer callback in the promise constructor...")
    })
}
console.log("Starting the Code....");
const p = createPromise();
console.log("We are now waiting for the promise to be resolved or rejected...");
console.log("Currently my Promise object is in pending state...");
p.then(function f(value){
    console.log("Promise resolved with value : ", value);
    console.log("Promise is now in fulfilled state...", p);
}, function g(value){
    console.log("Promise rejected with value : ", value);
    console.log("Promise is now in rejected state...", p);
})
console.log("Last line of code....");

*/

/*function createPromise(){
    return new Promise(function exec(res, rej){
        console.log("Entering the executer callback in the promise constructor...")
        setTimeout(function f(){
            console.log("Resolving the promise...");
            res("Promise resolved with value : ", 10);
        }, 10000)
        console.log("Exiting the executer callback in the promise constructor...")
    })  
}
let p = createPromise();
p.then(function f1(value){console.log("We Fulfilled 1 with value", value)}
, function g1(value){console.log("We Rejected 1 with value", value)}
)
p.then(function f2(value){console.log("We Fulfilled 2 with value", value)}
, function g2(value){console.log("We Rejected 2 with value", value)}
)
for(let i=0;i<10000000000;i++){}
console.log("Last line of code....");
*/

function fetchData(url){
    return new Promise(function exec(res, rej){
        console.log("Started downloading from", url);
        setTimeout(function f(){
            console.log("Downloading from", url);
            let data = "Dummy data";
            res(data);
            console.log("Downloading completed ");  // yaha pee yee print hone ke baad hii resolver fulfilled hoga.
        }, 7000)
    })
}
console.log("Starting the code....");
let promiseObj = fetchData("https://www.google.com");
promiseObj.then(function f1(value){
    console.log("Value is", value);
})
console.log("Ending the code....");
