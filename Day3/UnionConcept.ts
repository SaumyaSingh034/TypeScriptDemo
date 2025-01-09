let userId: (string | number);

userId = "Saumya";
userId = 90;
//userId = true; --> gives error


function getUserInfo(customerId : (string | number)){
    if(typeof(customerId) === "number"){
        return customerId+"_saumya";
    }
    else if(typeof(customerId === "string")){
        return customerId+"_saumya";
    }
}

console.log(getUserInfo(89901));
console.log(getUserInfo("Saumya Singh"));