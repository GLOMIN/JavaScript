
//console.log
for(let i = 0; i < 3; i++){
console.log("taoKomin");
// alert(i);
}
//var,let,const
var x = 20;
{
    var x = 20;
    let y = 15;
}
console.log(x);
var firstname ="Komin";
let lastname ="joonta";
const age = 21;
console.log(firstname);
console.log(lastname);
console.log(age);
//type
console.log(typeof 10);
console.log(typeof 10.12);
console.log(typeof "jimmee");
console.log(typeof true);
//Order of Operrations
let total = 2+2-2*2/2;
let test = (4+2*2/2*2+4+1-5+19)+91
console.log(total);
console.log(test);
let number = prompt("กรอกเลขที่ต้องการซื้อ");
console.log(number);
let rands = Math.floor(Math.random() * 10);//random0-9
console.log(rands);
document.getElementById("result").innerHTML = rands; 
let func = tF();
let tF = () =>{
if(number === rands ){
    console.log("win");
}
else{
    console.log("lose");
}
}
document.getElementById("winorlose").innerHTML = func;
