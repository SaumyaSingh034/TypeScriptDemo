let value : boolean = true;

if(value){
    console.log("PASS");
}else{
    console.log("FAIL");
}

let x : number = 10, y:number = 9, z:number = 45;
if(x>y && x>z){
    console.log("x is greater "+x);
} else if(y>x && y>z){
    console.log("y is greate "+y);

} else{
    console.log("z is greater "+z);
}

//Ternary Operator
let i:number = 100;
let j = 1000;

i>j ? console.log("i is greater than j "+i) : console.log("j is greater than i "+j);

let browser :string = "shj";

browser=="chrome" ? console.log("Launch Chrome") : browser == "firefox" ? console.log("Launch Firefox") : console.log("Please check your browser");


