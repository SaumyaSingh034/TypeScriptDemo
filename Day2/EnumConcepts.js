//1. Numeric
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 9] = "Chrome";
    Browser[Browser["Firefox"] = 10] = "Firefox";
    Browser[Browser["Safari"] = 11] = "Safari";
    Browser[Browser["Edge"] = 89] = "Edge";
    Browser[Browser["Mozella"] = 90] = "Mozella";
})(Browser || (Browser = {}));
console.log(Browser.Chrome);
console.log(Browser.Safari);
console.log(Browser.Mozella);
var BrowserFunction;
(function (BrowserFunction) {
    BrowserFunction[BrowserFunction["Firefox"] = 0] = "Firefox";
    BrowserFunction[BrowserFunction["Safari"] = 1] = "Safari";
    BrowserFunction[BrowserFunction["Edge"] = 2] = "Edge";
    BrowserFunction[BrowserFunction["Mozella"] = getBrowserVersion('chrome') * 8] = "Mozella";
    BrowserFunction[BrowserFunction["Chrome"] = getBrowserVersion('chrome')] = "Chrome";
})(BrowserFunction || (BrowserFunction = {}));
function getBrowserVersion(browserName) {
    if (browserName == "chrome")
        return 115;
    return -1;
}
console.log(BrowserFunction.Chrome);
console.log(BrowserFunction.Safari);
console.log(BrowserFunction.Mozella);
//2. String
var Environment;
(function (Environment) {
    Environment["DEV"] = "dev";
    Environment["QA"] = "qa";
    Environment["STAGE"] = "stage";
    Environment["PROD"] = "prod";
})(Environment || (Environment = {}));
console.log(Environment);
console.log(Environment.DEV);
console.log(Environment["STAGE"]);
//3. Hetrogeneous
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.PENDING);
