var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

    someInstance.storage = {};
    someInstance.counter = 0;
  // someInstance.push = stackMethods.push
  // someInstance.pop = stackMethods.pop
  // someInstance.size = stackMethods.size
    _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
    
    this.counter++;
    
    this.storage[this.counter] = value;
  }
  stackMethods.pop = function(){
    if(this.counter > 0){
     
    return this.storage[this.counter--]; 
    }


  }
  stackMethods.size = function(){
    return this.counter;
  }
