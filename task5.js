//Tapshiriq 1
let num=prompt("Dörd rəqəmli ədəd daxil edin:");
let a=Math.floor(num/1000); 
let b=Math.floor((num%1000)/100); 
let c=Math.floor((num%100)/10); 
let d=num%10; 
let sum=a+b+c+d; 
console.log("Ədədin rəqəmləri cəmi:"+sum);

//Tapshiriq 2
let full_name=prompt ("Soyadınızı va adınızı daxil edin: ");
let part=full_name.split(" "); 
console.log("Salam,"+part[1]);

//Tapshiriq 3
let age=prompt("Please,write your age:"); 
if(age < 18){
    console.log("Access Denied");
}
 else{
    console.log("Access Granted");
}
