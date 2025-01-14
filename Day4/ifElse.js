var value = true;
if (value) {
    console.log("PASS");
}
else {
    console.log("FAIL");
}
var x = 10, y = 9, z = 45;
if (x > y && x > z) {
    console.log("x is greater " + x);
}
else if (y > x && y > z) {
    console.log("y is greate " + y);
}
else {
    console.log("z is greater " + z);
}
//Ternary Operator
var i = 100;
var j = 1000;
i > j ? console.log("i is greater than j " + i) : console.log("j is greater than i " + j);
var browser = "shj";
browser == "chrome" ? console.log("Launch Chrome") : browser == "firefox" ? console.log("Launch Firefox") : console.log("Please check your browser");
