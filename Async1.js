// create own map function
/*const arr = [2,3,5,6,4,8,9];
function myMap(arr, fn){
    let result = []; // creating new array to store result
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
console.log(myMap(arr, function g(ele){
    return ele * ele;
}))
*/

// concept of setTimeout 
/*function createTimer(time, timeId){
    console.log("Creating a new timer with ID", timeId);
    setTimeout(()=> {
        console.log(`Timer with id ${timeId} is done`);
    }, time)
    console.log("Successfuly created a new timer with id", timeId);
}
console.log("Starting the code : ");
createTimer(20000, 1);
createTimer(0, 2);
console.log("Startiong loop : ");
for(let i=0;i<10000000;i++){}
console.log("Loop done. ");
console.log("Last line of code");
*/
// call back hell => gives pyramid like structure
/*function getSquare(n, cb){
    setTimeout(() => {
        cb(n*n)
    },0)
}
getSquare(2, (result1)=>{
    console.log(result1)
    getSquare(result1,(result2)=>{
        console.log(result2)
        getSquare(result2, (result3)=>{
            console.log(result3)
        })
    })
})
*/
// Inversion Of Control = [IOC], as getPost function is dependent on getUser
/*function getUser(cb){
    setTimeout(()=>{
        cb({userName:"Akshita", userId:"IOC973"})
    }, 10)
}
function getPost(userid, cb){
    setTimeout(()=>{
        cb(['Post1', 'Post2'])
    })
}
getUser((UserDetail)=>{
    console.log(UserDetail)
    getPost(UserDetail.userId, (post)=>{
        console.log(post)
    })
})
*/
// implement download, write file, upload. (?.) is optional chaining -> it is used in case if user might not want to send callback
function download(url,callback){
    console.log("Downloading from url", url)
    setTimeout(()=>{
        console.log("Downloading Done !!!");
        let downloadData = "Some data is downloading..."
        callback?.(downloadData)
    })
}
function writeFile(data, fileName, callback){
    console.log("Writing", data, "to file");
    setTimeout(()=>{
        console.log("Writing to file", fileName, "is done")
        let status = "Done, writing completed...."
        callback?.(status)
    })
}
function Upload(fileName, url, callback){
    console.log("Uploading file to", fileName, "to", url)
    setTimeout(()=>{
        console.log("Uploading data to file is done !!!")
        let uploadStatus = "Successful..."
        callback?.(uploadStatus)
    })
}
function process(){
    download("https://www.example.com", (data)=>{
        writeFile(data, "file.txt", (status)=>{
            Upload("file.txt", "https://www.example.com", (uploadStatus)=>{
                console.log("All done.... task completed")
            })
        })
    })
}
process();
