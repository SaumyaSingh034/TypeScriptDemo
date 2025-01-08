//1. Numeric
enum Browser{
    Chrome = 9,
    Firefox,
    Safari,
    Edge=89,
    Mozella
}

console.log(Browser.Chrome);
console.log(Browser.Safari);
console.log(Browser.Mozella);


enum BrowserFunction{
    Firefox,
    Safari,
    Edge,
    Mozella = getBrowserVersion('chrome') * 8,
    Chrome = getBrowserVersion('chrome'),
}



function getBrowserVersion(browserName : string): number{
    if(browserName == "chrome")
        return 115;
    return -1;
}

console.log(BrowserFunction.Chrome);
console.log(BrowserFunction.Safari);
console.log(BrowserFunction.Mozella);

//2. String
enum Environment{
    DEV = "dev",
    QA = "qa",
    STAGE = "stage",
    PROD = "prod"
}

console.log(Environment);
console.log(Environment.DEV);
console.log(Environment["STAGE"]);


//3. Hetrogeneous

enum Status{
    ACTIVE = "active",
    DEACTIVE = 1,
    PENDING

}

console.log(Status)
console.log(Status.PENDING)
