//Tapsiriq 1

function hesab_cem(rubl,dollar){
    let valyuta = 84;
    let sum = rubl+dollar*valyuta;
    console.log('Mebllegin cemi:'+sum+'rubl');
}

hesab_cem(200,450);

//Tapsiriq 2

function max_num(a,b,c){
    console.log('Maximum number is:'+Math.max(a,b,c));
}

max_num(15,36,74);

//Tapsiriq 3

function user(name){
    console.log(name+' '+'is active now');
}

user('Ali');
user('Kamal');
user('Lale');