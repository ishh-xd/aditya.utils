'use strict';
 var c = require('chalk');
module.exports = {
    subtract,
    divide,
    multiply,
    add,
  packageVersion,
    logcyan,
    logred,
    logblue, 
    loggreen,
    logyellow
}
function packageVersion(name) => {
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
