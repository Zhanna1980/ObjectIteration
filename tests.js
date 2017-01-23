/**
 * Created by zhannalibman on 23/01/2017.
 */

const objIteration = require("./ObjectIteration.js");

runTests();


function runTests() {
    try {
        var iterObj = createObject();
        testAddKey(iterObj);
        testLength(iterObj);
        testGetValueByIndex(iterObj);
        testGetValueByKey(iterObj);
        testGetIndex(iterObj);
        testForEachValue(iterObj);
        console.log("PASS");
    }
    catch(err) {
        console.error(err);
        console.log("FAILED");
    }
}

function createObject(){
    var iterableObj = new objIteration.IterableObject();
    if(iterableObj == undefined){
        throw Error("Create failed");
    }
    else {
        return iterableObj;
    }
}

function testAddKey(iterableObject) {
    for (var i = 0; i < 10; i++) {
        iterableObject.addKey("k" + i, i);
        if(iterableObject._obj["k" + i] !== i){
            throw Error("Add failed");
        }
    }
}

function testLength(iterableObject){
    if(iterableObject.length() !== iterableObject._supportArray.length){
        throw Error("Length failed");
    }
}

function testGetValueByIndex(iterableObject){
    for (var i = 0; i < iterableObject._supportArray.length; i++){
        if(iterableObject.getValueByIndex(i) !== iterableObject._obj[iterableObject._supportArray[i]]
            || iterableObject.getValueByIndex(i) !== iterableObject._obj["k" + i]){
                throw Error("GetValueByIndex failed");
        }else if(iterableObject.getValueByIndex(i) == undefined){
            throw Error("GetValueByIndex failed");
        }
    }
    if(iterableObject.getValueByIndex(-1) !== undefined){
        throw Error("GetValueByIndex failed");
    }
}

function testGetValueByKey(iterableObject) {
    for (var i = 0; i < iterableObject._supportArray.length; i++) {
        if (iterableObject.getValueByKey("k" + i) !== iterableObject._obj["k" + i]){
            throw Error("GetValueByKey failed");
        }
    }
}

function testGetIndex(iterableObject) {
    for(var i = 0; i < iterableObject._supportArray.length; i++) {
        if(iterableObject.getIndex("k" + i) !== i){
            throw Error("GetIndex failed");
        }
    }
}

function testForEachValue(iterableObject) {
    var testArray = [];
    iterableObject.forEachValue(function (value){
        copyValueToArray(value, testArray);
    });

    for(var i = 0; i < testArray.length; i++){
        if(testArray[i] != i){
            throw Error("Each fail");
        }
    }

    function copyValueToArray(value, array){
        array.push(value);
    }
    return testArray;
}


