// Manual Exception

/*function ManualException(){
    const randomNum = Math.floor(Math.random()*100);
    if(randomNum%2==0){
        return  randomNum;
    }
    else {
        throw "Random Number is Odd Number";
    }
}
function caller(){
    try{
        console.log("Risky Code ....");
        const response = ManualException();
        console.log("Risky code working fine,", response);
    }
    catch(exception){
        console.log("Try Again ....!");
        console.log(exception);
    }
}
caller();
*/

// handling Promise Exception
/*const p = new Promise((res, rej)=>{
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
const p2 = p.then(function f(){throw 99}, function g(){return 88});
*/

// creating Download -> WriteFiles -> Upload
function Download(url){
    return new Promise(function exec(res, rej){
        console.log("Started Downloading data from : ", url);
        setTimeout(function a(){
            console.log("Data downloaded from : ", url);
            let data = "Some data from "+ url;
            res(data);
           // rej(data);
        }, 3000)
    })
}

function WriteFiles(data, fileName){
    return new Promise(function exec(res, rej){
        console.log("Writing", data, "to file");
        setTimeout(function b(){
            console.log("Writing to file", fileName, "is done");
            let status = "Successful Download";
            res(status);
            // rej(status)
        })
    })
}

function Upload(fileName, url){
    return new Promise( function exec(res, rej){
        console.log("Uploading file", fileName,"to", url);
        setTimeout(function c(){
            console.log("Upload is done...");
            let uploadStatus = "Success Status";
            res(uploadStatus);
            // rej(uploadStatus)
        }, 4000)
    })
}

// This will give Parallel execution
/*Download("https://example.com").then(function f(value){console.log("Downloaded value ", value)})
WriteFiles("Some Date", "Files.txt").then(function g(value){console.log("Write Status is", value)})
Upload("Files.txt","https://example.com").then(function h(value){console.log("Upload Status is : ", value)})
*/

// If i want in Sequential or Order wise 
/*const p2 = Download("https://example.com").then(
    function f(value){
        console.log("Downloaded value ", value);
        return WriteFiles(value, "Files.txt");
    }
)
const p3 = p2.then(function g(value){
    console.log("Write Status is", value)
    return Upload("Files.txt", "https://example.com");
})
p3.then(function h(value){
    console.log("Upload Status is : ", value)
})
*/
// or You can do this
Download("https://example.com")
.then(function f(value){
    console.log("Downloaded data is ", value);
    return WriteFiles(value, "Files.txt");
})
.then(function g(value){
    console.log("Write Status is", value);
    return Upload(value, "https://example.com");
})
.then(function h(value){
    console.log("File uploaded", value);
})  // if rejection (rej) is called in any of the function the catch (i) is called.
.catch(function i(value){
    console.log("Error Occured....", value);
})


