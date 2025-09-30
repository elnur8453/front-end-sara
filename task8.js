//Tapshiriq 1

const numCounter=(text)=>{
    return text.replace(/[^A-z-əöğıüçş]/gi,"").length;
}

console.log(numCounter('Mənim adım Fatimədir'));
console.log(numCounter('I am sexteen years old'));

//Tapshiriq 2

function isValidNumber(num){
    if(num.length==11 && num.startsWith('+7')){
        return true;
    }else{
        return false;
    }
}

console.log(isValidNumber('+994123457678'));
console.log(isValidNumber('+7246518907'));
console.log(isValidNumber('86783209173'));