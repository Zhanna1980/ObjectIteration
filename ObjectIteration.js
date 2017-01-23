/**
 * Created by zhannalibman on 23/01/2017.
 */
function IterableObject(){
    this._obj = {};
    this._supportArray = [];
}

IterableObject.prototype.addKey = function(key,value){
    this._supportArray.push(key);
    this._obj[key] = value;
}

IterableObject.prototype.getValueByIndex = function(index){
    const key = this._supportArray[index];
    return this._obj[key];
}

IterableObject.prototype.getValueByKey = function(key){
    return this._obj[key];
}

IterableObject.prototype.length = function (){
    return this._supportArray.length;
}

IterableObject.prototype.getIndex = function(key){
    for (var i = 0; i < this._supportArray.length; i++){
        if (this._supportArray[i] === key){
            return i;
        }
    }
    return -1;
}

IterableObject.prototype.forEachValue = function(whatToDo){
    for (var i = 0; i < this._supportArray.length; i++){
        whatToDo(this._obj[this._supportArray[i]]);
    }
}

module.exports = {
    IterableObject: IterableObject,
    addKey: IterableObject.prototype.addKey,
    getValueByIndex: IterableObject.prototype.getValueByIndex,
    getValueByKey: IterableObject.prototype.getValueByKey,
    length: IterableObject.prototype.length,
    getIndex: IterableObject.prototype.getIndex,
    forEachValue: IterableObject.prototype.forEachValue
};





