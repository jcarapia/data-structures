var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  //_.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.counter++;
  this.storage[this.counter] = value;
};

stackMethods.pop = function(){
  if(this.counter > 0){
    this.counter--;
  }
  return this.storage[this.counter+1];
};

stackMethods.size = function(){
  return this.counter;
};

