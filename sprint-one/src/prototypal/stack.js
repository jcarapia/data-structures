var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.prototype);
  someInstance.storage = {};
  someInstance.counter = 0;


  return someInstance;
};

var stackMethods = {

};

Stack.prototype.push = function(value){
  this.counter++
  this.storage[this.counter] = value
};

Stack.prototype.pop = function(){
  if(this.counter > 0){
    this.counter--
  }
  return this.storage[this.counter+1]
};

Stack.prototype.size = function(){
  return this.counter
};

