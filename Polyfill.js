// map, filter, reduce

// 1. map
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i], i, this));        // this[i]->arr[i], i -> index, this -> arr
    }
    return temp;
}
const arr = [3,4,5,6,7,8];
const multiplyThree = arr.myMap((ele , i, arr)=>{
    return ele*3;
})
console.log(multiplyThree);

// 2. filter    -->     used to check the condition 
Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i], i, arr)){
            temp.push(this[i]);
        }
    }
    return temp;
}
const arr2 = [4,5,6,7,8,9];
const moreThanFive = arr2.myFilter((ele)=>{
    return ele>5;
})
console.log(moreThanFive);

// 3. reduce --->  return single value
Array.prototype.myReduce = function(cb, initialValue){
    var acc = initialValue;     // acc -> accumulator
    for(let i=0;i<this.length;i++){
        acc = acc?cb(acc,this[i],i,this):this[i];   // first check whether the value is present or not, if value is present the make callback else assign the value
    }
    return acc;
}
const arr3 = [5,4,3,6,7,2];
const sum = arr3.myReduce((acc,curr)=>{
    return acc + curr;
})
console.log(sum);
