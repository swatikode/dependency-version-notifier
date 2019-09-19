const process = require("process");
const fs = require("fs");
process.argv.slice(2).forEach(function (arg) {
    console.log(arg);
});
let a = "inside a javascript file";
console.log(a);
