var names = ["saumya", "rahul", "tryaksh", "piyush", "palak"];
console.log(names);
console.log(names[2]);
//using generics
var empNames = ["saumya", "sachin", "poorvi", "nikunj"];
console.log(empNames);
console.log(empNames.reverse.toString);
var empId = [1, 2, 3, 4];
var empInfo = [1, "sachin", true, 899.99, null, undefined];
//multitype array
var multiArray = [1, "data", 2, "typescript", "selenium", 4, 5, 6, 7, "javascript"];
var multiArrayGenerics = [true, "javascript"];
var emps = ["saumya", "sachin", "poorvi", "nikunj"];
//iterate the array using for loop
// 1. index based for loop
for (var i = 0; i < emps.length; i++) {
    console.log(emps[i]);
}
console.log("------------------");
//2. for in loop
for (var e in names) {
    console.log(names[e]);
}
