//TypeScript is statically typed language
//Type Inference
//Type Annotation


let fName: string;
fName = "Saumya";
console.log(fName);
fName = "Rahul";
console.log(fName);
console.log(fName.toLowerCase);

let test = "Saumya"; //type=string-->defined at runtime-> Type Inference
let data = 890;//type=number--> type inference

let number:null = null;
let country:undefined = undefined;

//any data type
let value: any = 80;
value="Saumya";
value=true;
value=900.87867;
value="Tryaksh Singh Bist";

//void when return type is void i.e, when function doesnt return any value
function print(): void{ //return void
    console.log("Hello Saumya from TypeScript");
}

function getNumber(): number{ //return type at Compile Time 
    return 122345;
}

