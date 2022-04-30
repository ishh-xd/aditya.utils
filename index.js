'use strict';
 var c = require('chalk');

module.exports = {
    subtract,
    divide,
   parsems,
  multiply,
    add,
  version,
  packageVersion,
    logcyan,
    logred,
    logblue, 
    loggreen,
    logyellow
}

function version() {
    return require(`${process.cwd()}/package.json`).dependencies["aditya.utils"] || `Unexpected Error!`;
  }  


function parsems(ms) {
    if (isNaN(ms)) {
        return `${ms}, is not an integer!`;
    }
    var msop = require("pretty-ms")
    let a = msop(ms)
    return a || "Uhmm? Unexpected error occurred!";
} 


function packageVersion(name) {
    return require(`${process.cwd()}/package.json`).dependencies[name] || `Package ${name} not found/installed.`
  } 

 function logcyan(text) {
  return console.log(c.cyan(text));
 }
function logyellow(text) {
  return console.log(c.yellow(text));
}
function loggreen(text) {
  return console.log(c.green(text));
}
function logred(text) {
  return console.log(c.red(text));
}
function logblue(text) {
  return console.log(c.blue(text));
}
 
function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}
 
function divide(a, b) {
    return a / b;
}
 
function multiply(a, b) {
    return a * b;
}
