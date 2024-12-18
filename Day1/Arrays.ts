let names: string[] = ["saumya","rahul","tryaksh","piyush","palak"];
console.log(names);
console.log(names[2]);

//using generics

let empNames: Array<string> = ["saumya","sachin","poorvi","nikunj"];
console.log(empNames);
console.log(empNames.reverse.toString);


let empId: Array<number> = [1,2,3,4];

let empInfo: Array<any> = [1,"sachin",true,899.99,null, undefined];

//multitype array

let multiArray: (string | number)[] = [1,"data", 2,"typescript", "selenium",4,5,6,7,"javascript"]
let multiArrayGenerics: Array<string | boolean> = [true,"javascript"];

let emps: Array<string> = ["saumya","sachin","poorvi","nikunj"];

//iterate the array using for loop
// 1. index based for loop

for(let i=0;i<emps.length;i++){
    console.log(emps[i]);
}

console.log("------------------");

//2. for in loop
for( let e in names){
    console.log(names[e]);
}