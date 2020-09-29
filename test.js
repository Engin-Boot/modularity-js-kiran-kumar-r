// jshint esversion:6
const expect = require('chai').expect;
const index = require("./index") ;

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);

function GetColorCodedPairs() {
    var colorCodedPair = [] ;
    var i ;
    for ( i = 1; i < 26; i++) {
        var colorCombo ={};
        colorCombo.number = i;
        colorCombo.color = index.GetColorFromPairNumber(i);
        colorCodePair.push(colorCombo);  
      }
      return colorCodePair;
}