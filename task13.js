let arr = [2, 4, 6, 8, 10];

let newArr = arr.slice();

for(let i = 0; i < newArr.length; i++){
    newArr[i] *= 2;
}

console.log("Orijinal massiv: ", arr);
console.log("Yeni massiv: ", newArr);