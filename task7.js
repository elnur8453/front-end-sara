//Tapshiriq 2

//Switch case

let GendOfHum=prompt('Cinsinizi daxil edin:(M or F)');

switch(GendOfHum.toUpperCase()){
    case 'M':
        console.log('Male');
        break;
    case 'F':
        console.log('Female');
        break;
    default:
        console.log('Baş hərfləri düzgün daxil edin!');

}

//Ternary

let gender=prompt('Cinsinizi daxil edin:(M or F)');
gender=gender.toUpperCase();

let res=(gender==='M')? console.log('Male'): (gender==='F')? console.log('Female'): console.log('Yanlış seçim!');

//If

let gend=prompt('Cinsinizi daxil edin:(M or F)');
gend=gend.toUpperCase();

if(gend==='M'){
    console.log('Male');
} else if(gend==='F'){
    console.log('Female');
} else{
    console.log('Daxil edilən informasiya yanlışdır!');
}