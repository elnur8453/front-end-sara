let arr = [3, -5, 8, -2, 0, 7];

let newArr = arr.map(num=>{
    if(num<0){
        return Math.abs(num);
    }else if(num>0){
        return num*2;
    }else{
        return num;
    }
});

console.log(newArr);