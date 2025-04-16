/*const pr = new Promise((res, rej)=>{
    console.log("Executer callback triggered by Promise...");
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random()*100);
        console.log(randomNum);
        if(randomNum%2==0){
            res();
        }
        else{
            rej();
        }
    }, 10000)
})
for(let i=0;i<1000000000;i++){}
console.log("Created Promise Object");
console.log(pr);
*/

/*console.log("Start...");
setTimeout(()=>{
    console.log("Timer 1 done ....");
}, 5000)
const pr = new Promise(function Executer(res, rej){
    console.log("Executer callback triggered by promise constructor");
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random()*100);
        console.log(randomNum);
        if(randomNum%2==0){
            res(randomNum);
        }
        else {
            rej(randomNum);
        }
    }, 6000)
})
// using (.then) to directly access the onFulfillment and onRejected
pr.then(function f(){console.log("Executing F...")}, function g(){console.log("Execution g...")})
pr.then(function h(){console.log("Executing h...")}, function i(){console.log("Executing i...")});
for(let i=0;i<10000000;i++){}
for(let i=0;i<10000000000;i++){}
console.log("End...");
*/

// what if both macro and micro task queues are busy 
console.log("Start...");
const p1 = new Promise((res, rej)=>{
    console.log("Executer call back triggered by Promise P1 ....");
    setTimeout(()=>{
        console.log("Timer of P1 done....");
        res(100);
    }, 1000)
})
p1.then(function a(){console.log("Calling P1 (a)... ")}, function b(){console.log("Calling P1 (b)....")});

setTimeout(function timerCB(){
    console.log("Timer 1 done ....");
}, 5000)

const pr = new Promise(function Executer(res, rej){
    console.log("Executer callback triggered by promise constructor");
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random()*100);
        console.log(randomNum);
        if(randomNum%2==0){
            res(randomNum);
        }
        else {
            rej(randomNum);
        }
    }, 6000)
})
pr.then(function f(){console.log("Executing F...")}, function g(){console.log("Execution g...")})
pr.then(function h(){console.log("Executing h...")}, function i(){console.log("Executing i...")});
for(let i=0;i<10000000000;i++){}
console.log("End...");

