/**
 * Created by zhannalibman on 23/01/2017.
 */
function OrderedMap(){
    this._obj = {};
    this._supportArray = [];
}

OrderedMap.prototype.push = function(key, value){
    this._supportArray.push(key);
    this._obj[key] = value;
    return this._supportArray.length;
};

OrderedMap.prototype.add = OrderedMap.prototype.push;



// OrderedMap.prototype.getValueByIndex = function(index){
//     const key = this._supportArray[index];
//     return this._obj[key];
// }

// OrderedMap.prototype.getValueByKey = function(key){
//     return this._obj[key];
// }

// OrderedMap.prototype.length = function (){
//     return this._supportArray.length;
// }

// OrderedMap.prototype.getIndex = function(key){
//     for (var i = 0; i < this._supportArray.length; i++){
//         if (this._supportArray[i] === key){
//             return i;
//         }
//     }
//     return -1;
// }

OrderedMap.prototype.pop = function () {
    var key = this._supportArray.pop();
    var value = this._obj[key];
    delete this._obj[key];
    return value;
};

OrderedMap.prototype.shift = function () {
    var key = this._supportArray.shift();
    var value = this._obj[key];
    delete this._obj[key];
    return value;
};

OrderedMap.prototype.unshift = function (key, value) {
    this._supportArray.shift(key);
    this._obj[key] = value;
    return this._supportArray.length;
};

OrderedMap.prototype.forEach = function(whatToDo){
    for (var i = 0; i < this._supportArray.length; i++){
        whatToDo(this._obj[this._supportArray[i]]);
    }
};


OrderedMap.prototype.toString = function () {
    var keys = "The keys are ";
    for (var i = 0; i < this._supportArray.length - 1; i++){
        keys += this._supportArray[i] + ", ";
    }
        keys += this._supportArray[this._supportArray.length - 1] + ".";
    return keys;
};

module.exports = {
    OrderedMap: OrderedMap,
    push: OrderedMap.prototype.push,
    getValueByIndex: OrderedMap.prototype.getValueByIndex,
    getValueByKey: OrderedMap.prototype.getValueByKey,
    length: OrderedMap.prototype.length,
    getIndex: OrderedMap.prototype.getIndex,
    forEach: OrderedMap.prototype.forEach
};





